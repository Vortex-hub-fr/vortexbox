# Deploiement VortexBox sur Railway

Ce projet est pret pour Railway avec:
- `railway.json`
- `npm start` (serveur Node sur port Railway)

## 1) Creer le projet Railway
1. Ouvrir Railway
2. **New Project** > **Deploy from GitHub repo**
3. Selectionner: `Vortex-hub-fr/vortexbox`

## 2) Variables d'environnement
Dans le service Railway > **Variables**:

- `NODE_ENV=production`
- `HOST=0.0.0.0`
- `PORT=${{RAILWAY_PORT}}` (ou laisser vide, Railway injecte le port)

Si vous utilisez email/IA:
- `MAIL_FROM`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `RESEND_API_KEY` (optionnel)
- `OPENAI_API_KEY` (optionnel)
- `OPENAI_MODEL=gpt-4.1-mini` (optionnel)

## 3) Volumes persistants (important)
Pour ne pas perdre les uploads et donnees admin:

1. Ouvrir l'onglet **Volumes**
2. Creer un volume monte sur `/app/uploads`
3. Creer un volume monte sur `/app/data`

## 4) Healthcheck
Le service expose `GET /health`.
Railway l'utilise pour verifier le demarrage.

## 5) Domaine
Dans **Settings** > **Domains**:
1. Generate Domain (railway.app)
2. Optionnel: connecter votre domaine perso

## 6) Verification
1. Ouvrir le site
2. Connexion admin
3. Uploader une image test
4. Redeployer
5. Verifier que l'image est toujours presente
