#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

HOST="127.0.0.1"
PORT="8080"
URL="http://${HOST}:${PORT}"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js n'est pas installe ou introuvable dans le PATH."
  echo "Installe Node.js puis relance ce fichier."
  read -n 1 -s -r -p "Appuie sur une touche pour fermer..."
  echo
  exit 1
fi

echo "Lancement du serveur VortexBox..."
echo "Dossier: $(pwd)"

if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Serveur deja actif sur $URL"
  open "$URL" || true
  exit 0
fi

node server.js &
SERVER_PID=$!

for _ in {1..30}; do
  if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
    break
  fi
  sleep 0.5
done

open "$URL" || true
wait "$SERVER_PID"
