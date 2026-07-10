# Kasa

Application web de location immobilière entre particuliers, développée en React.
Projet réalisé dans le cadre de la formation d'intégrateur web (OpenClassrooms,
projet 7).

## Aperçu

_Captures d'écran et lien de démo à ajouter une fois le projet déployé._

## Technologies utilisées

- **React** (composants fonctionnels + hooks)
- **Vite** (outil de build et serveur de développement)
- **React Router** (navigation en mode déclaratif)
- **Sass** (styles)
- **ESLint** (analyse statique du code)

Les données proviennent d'une API fournie par OpenClassrooms (voir section
Installation).

## Installation

### 1. Le front-end (ce dépôt)

```bash
git clone https://github.com/leaspadea/kasa-frontend.git
cd kasa-frontend
npm install
```

### 2. L'API (back-end séparé)

Le front a besoin de l'API pour récupérer les logements. Elle se lance
séparément :

```bash
git clone https://github.com/OpenClassrooms-Student-Center/TesteurLogiciel_appli_location_immobiliere_React.git
cd TesteurLogiciel_appli_location_immobiliere_React/backend
npm install
npm start
```

L'API écoute alors sur `http://localhost:8080`.

## Utilisation

Une fois l'API lancée, démarre le serveur de développement du front :

```bash
npm run dev
```

L'application est accessible sur `http://localhost:5173`.

## Structure du projet

```
kasa-frontend/
├── public/            # Fichiers statiques (favicon…)
├── src/
│   ├── components/    # Composants réutilisables (Header, Card, Collapse…)
│   ├── pages/         # Pages liées aux routes (Accueil, Logement, 404…)
│   ├── styles/        # Fichiers Sass
│   ├── App.jsx        # Composant racine
│   └── main.jsx       # Point d'entrée de l'application
├── index.html
├── package.json
└── vite.config.js
```

## Auteur

**leaspadea**

## Licence

Distribué sous licence MIT.
