# Deploiement VortexBox sur CapRover

Ce projet est pret pour CapRover avec:
- `captain-definition`
- `Dockerfile`

## 1) Creer l'application
1. Ouvrir CapRover > **Apps** > **Create New App**
2. Nom recommande: `vortexbox`

## 2) Deployer le code
Options:
- **Method A**: Deploy from GitHub/Git
- **Method B**: Upload tar/zip du projet

CapRover utilisera automatiquement `captain-definition`.

## 3) Variables d'environnement
Dans **App Configs > Environment Variables**:

- `NODE_ENV=production`
- `HOST=0.0.0.0`
- `PORT=8080`

Et selon votre usage:
- `MAIL_FROM=VortexBox <votre_email@outlook.fr>`
- `SMTP_HOST=smtp.office365.com`
- `SMTP_PORT=587`
- `SMTP_USER=...`
- `SMTP_PASS=...`
- `RESEND_API_KEY=...` (si vous utilisez Resend)
- `OPENAI_API_KEY=...` (optionnel)
- `OPENAI_MODEL=gpt-4.1-mini` (optionnel)

## 4) Stockage persistant (important)
Dans **App Configs > Persistent Directories**:

- `/app/uploads`
- `/app/data`

Sans ces volumes, les uploads et donnees admin peuvent etre perdus apres redeploiement.

## 5) Domaine + HTTPS
1. **App Configs > HTTP Settings**
2. Ajouter votre domaine
3. Activer **Enable HTTPS** (Let's Encrypt)

## 6) Verification rapide
Apres deploiement:
1. Ouvrir le site
2. Connexion admin
3. Uploader une image test
4. Redemarrer l'app depuis CapRover
5. Verifier que l'image est toujours presente

Si oui, les volumes persistants sont correctement configures.
