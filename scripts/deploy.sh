#!/usr/bin/env bash
#
# Publish the help center to helpcenter.aeven.io.
#
# Builds the site on this machine and copies the result to node1, where nginx
# serves it straight off disk. There is no process to restart: the next request
# reads the new files.
#
#   ./scripts/deploy.sh
#
# The key defaults to the OCI console pair in the aeven checkout; override with
# AEVEN_KEY=/path/to/key ./scripts/deploy.sh

set -euo pipefail

KEY="${AEVEN_KEY:-$HOME/Projects/Nodejs/Aeven/aeven/keys/oci/aeven_console_pair}"
HOST="${AEVEN_HOST:-ubuntu@51.170.181.97}"
REMOTE="/datadrive/apps/helpcenter/build"

cd "$(dirname "$0")/.."

if [ ! -f "$KEY" ]; then
  echo "No key at $KEY — set AEVEN_KEY to the private key for node1." >&2
  exit 1
fi

echo "Building"
pnpm build

echo "Copying build/ to ${HOST}:${REMOTE}"
rsync -az --delete \
  -e "ssh -i $KEY -o BatchMode=yes -o ConnectTimeout=15" \
  build/ "${HOST}:${REMOTE}/"

echo "Checking https://helpcenter.aeven.io/"
code=$(curl -s -o /dev/null -w '%{http_code}' https://helpcenter.aeven.io/)
echo "  status $code"
[ "$code" = "200" ] || { echo "Deploy finished but the site did not answer 200." >&2; exit 1; }
