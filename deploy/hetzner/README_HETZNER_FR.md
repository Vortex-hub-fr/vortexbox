# Deploiement Hetzner - VortexBox

Ce guide prepare ton site VortexBox en production sur un serveur Hetzner Ubuntu.

## 1) Creer le serveur

1. Hetzner Cloud > Create Server
2. Image: Ubuntu 22.04 LTS ou 24.04 LTS
3. Type: CX22/CX32 (selon budget)
4. Ajouter ta cle SSH
5. Noter l'IP publique

## 2) Pointer le domaine

Chez ton registrar (`vortexbox.org`):

- `A` record: `@` -> `IP_HETZNER`
- `A` record: `www` -> `IP_HETZNER`

Attendre la propagation DNS (5 min a 24h).

## 3) Copier le projet sur le serveur

Depuis ton Mac:

```bash
rsync -avz --delete \
  --exclude '.git' \
  --exclude '.env' \
  /Users/brunosoler/Documents/Playground/ \
  root@IP_HETZNER:/opt/vortexbox/
```

## 4) Lancer le setup serveur

Connexion SSH:

```bash
ssh root@IP_HETZNER
cd /opt/vortexbox
bash deploy/hetzner/setup_hetzner.sh
```

## 5) Configurer nginx

Editer:

```bash
nano /etc/nginx/sites-available/vortexbox
```

Remplacer `vortexbox.org` et `www.vortexbox.org` par ton vrai domaine.

Puis:

```bash
nginx -t
systemctl reload nginx
```

## 6) Configurer le .env production

Creer:

```bash
nano /opt/vortexbox/.env
```

Exemple minimal:

```env
HOST=127.0.0.1
PORT=8080
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=VortexCore@outlook.Fr
SMTP_PASS=vivihrpzgbtozyjz
MAIL_FROM=VortexBox <VortexCore@outlook.Fr>
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4.1-mini
```

## 7) Droit utilisateur + demarrage

```bash
chown -R vortexbox:vortexbox /opt/vortexbox
sudo -u vortexbox node -v
systemctl restart vortexbox
systemctl status vortexbox --no-pager
journalctl -u vortexbox -n 120 --no-pager
```

## 8) SSL HTTPS (Let's Encrypt)

Quand le DNS est OK:

```bash
certbot --nginx -d vortexbox.org -d www.vortexbox.org
```

Verifier auto-renouvellement:

```bash
systemctl status certbot.timer --no-pager
```

## 9) Verification finale

- `https://vortexbox.org` ouvre bien le site
- Connexion admin OK
- Upload image/jaquette OK
- API OK: `https://vortexbox.org/api/ping`
- Sauvegarde ZIP admin OK

## 10) Commandes utiles

```bash
# restart app
systemctl restart vortexbox

# logs app
journalctl -u vortexbox -f

# restart nginx
systemctl restart nginx
```

## Note importante

Contrairement a Vercel, ici tu as un vrai disque persistant.  
Tes uploads et donnees restent sur le serveur tant que tu ne les supprimes pas.

