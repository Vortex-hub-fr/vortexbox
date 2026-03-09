#!/usr/bin/env bash
set -euo pipefail

# Quick setup for Ubuntu 22.04/24.04 on Hetzner.
# Run as root: sudo bash deploy/hetzner/setup_hetzner.sh

APP_USER="vortexbox"
APP_DIR="/opt/vortexbox"

echo "[1/8] apt update + base packages"
apt update -y
apt install -y curl git nginx ufw certbot python3-certbot-nginx

echo "[2/8] install Node.js LTS"
if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
  apt install -y nodejs
fi

echo "[3/8] create app user"
if ! id "${APP_USER}" >/dev/null 2>&1; then
  useradd --system --create-home --shell /bin/bash "${APP_USER}"
fi

echo "[4/8] create app directory"
mkdir -p "${APP_DIR}"
chown -R "${APP_USER}:${APP_USER}" "${APP_DIR}"

echo "[5/8] copy systemd service"
cp deploy/hetzner/vortexbox.service /etc/systemd/system/vortexbox.service
systemctl daemon-reload
systemctl enable vortexbox.service

echo "[6/8] install nginx site config template"
cp deploy/hetzner/nginx-vortexbox.conf /etc/nginx/sites-available/vortexbox
ln -sf /etc/nginx/sites-available/vortexbox /etc/nginx/sites-enabled/vortexbox
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx

echo "[7/8] firewall"
ufw allow OpenSSH || true
ufw allow 'Nginx Full' || true
ufw --force enable || true

echo "[8/8] done"
echo "Now deploy code into ${APP_DIR}, create ${APP_DIR}/.env, then run:"
echo "  sudo systemctl restart vortexbox"
echo "  sudo systemctl status vortexbox --no-pager"
echo ""
echo "After DNS points to this server, issue SSL:"
echo "  sudo certbot --nginx -d vortexbox.org -d www.vortexbox.org"

