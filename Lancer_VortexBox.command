#!/bin/bash
set -e

cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js n'est pas installé ou introuvable dans le PATH."
  echo "Installez Node.js puis relancez ce fichier."
  read -n 1 -s -r -p "Appuyez sur une touche pour fermer..."
  echo
  exit 1
fi

echo "Lancement du serveur VortexBox..."
echo "Dossier: $(pwd)"
echo

node server.js
