#!/bin/zsh
set -e

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"

if [[ ! -s "$NVM_DIR/nvm.sh" ]]; then
  echo "NVM non trovato in $NVM_DIR. Installa NVM oppure configura Node 22 nel PATH."
  exit 1
fi

source "$NVM_DIR/nvm.sh"
nvm use

if [[ ! -d node_modules ]]; then
  npm install
fi

npm run dev
