# Max en détente - EnDétente v2

Site web avec panneau admin pour publier des produits avec upload d'images depuis le PC.

## 🚀 Fonctionnalités

- ✅ **Upload d'images depuis le PC** : Plus besoin de liens internet !
- ✅ **Favicon personnalisé** : Logo du singe dans l'onglet du navigateur
- ✅ **SEO optimisé** : Référencement pour "Max en détente", "MaxEnDetente", etc.
- ✅ **Panneau admin** : Interface simple pour publier des produits

## 📁 Structure du projet

```
src/
├── components/
│   ├── AdminPanel.js      # Panneau admin avec upload d'images
│   └── AdminPanel.css     # Styles du panneau admin
├── App.js                 # Composant principal
├── App.css               # Styles généraux
├── index.js              # Point d'entrée React
└── index.css             # Styles globaux

public/
├── index.html            # HTML avec SEO optimisé
├── manifest.json         # Configuration PWA
└── favicon.ico           # À remplacer par votre logo du singe
```

## 🛠️ Installation et démarrage

1. Installer les dépendances :
```bash
npm install
```

2. Démarrer le serveur de développement :
```bash
npm start
```

3. Pour construire pour la production :
```bash
npm run build
```

## 📸 Remplacer le favicon

1. Convertissez votre image du singe en format `.ico` ou `.png`
2. Remplacez le fichier `public/favicon.ico`
3. Optionnel : Créez aussi `public/logo192.png` et `public/logo512.png`

## 🌐 Déploiement sur Netlify

Le site se déploie automatiquement sur https://maxendetente.netlify.app/

## 🔧 Prochaines étapes

- [ ] Connecter à une base de données (Supabase déjà configuré)
- [ ] Ajouter l'authentification admin
- [ ] Implémenter la sauvegarde des produits
- [ ] Ajouter une galerie de produits publics