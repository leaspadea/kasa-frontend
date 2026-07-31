# 🏠 Kasa — Location immobilière entre particuliers

> Application web de location d'appartements entre particuliers, développée en React avec composants fonctionnels, hooks et React Router. Carrousel d'images et panneaux dépliables entièrement codés à la main, sans librairie tierce.

## 🚀 Démo en ligne

> ⚠️ Le projet n'est pas déployé en ligne : les données proviennent d'une API locale (port 8080). Pour tester le site, suivez la section [Installation](#-installation) pour lancer l'API et le front en local.

## 🎯 Contexte du projet

Kasa est une entreprise de location d'appartements entre particuliers. Elle souhaite refondre son site vieillissant avec une stack moderne côté front.

**Mission :** développer le front-end en **React** à partir des maquettes Figma, en respectant les spécifications techniques : composants réutilisables, navigation via React Router, et implémentation manuelle (sans librairie externe) du carrousel d'images et des panneaux dépliables.

## 🛠️ Technologies utilisées

- **React** — composants fonctionnels et hooks
- **Vite** — outil de build et serveur de développement
- **React Router** — navigation déclarative, logique du routeur centralisée
- **Sass** avec **CSS Modules** — architecture modulaire des styles
- **ESLint** — analyse statique et qualité de code
- **Git / GitHub** — versioning

## ✨ Fonctionnalités principales

- ✅ **Page d'accueil** : galerie de cartes affichant tous les logements disponibles
- ✅ **Page Logement** (`/logement/:id`) : carrousel d'images, titre, localisation, tags, informations sur l'hôte, note en étoiles, panneaux dépliables (description et équipements)
- ✅ **Page À propos** (`/a-propos`) : panneaux dépliables présentant les valeurs de l'entreprise
- ✅ **Page 404** : gestion des URL inexistantes et des identifiants de logement invalides
- ✅ **Carrousel d'images** codé manuellement (navigation, boucle infinie, compteur)
- ✅ **Composant Collapse** codé manuellement, réutilisé sur plusieurs pages
- ✅ **Hook personnalisé `useFetch`** pour mutualiser les appels API
- ✅ Site **responsive** (mobile et desktop)

## 📐 Structure du projet

```text
Kasa/
├── src/
│   ├── components/       # Header, Footer, Card, Collapse, Slideshow, Banner, Layout
│   ├── pages/            # Home, Housing, About, Error
│   ├── styles/           # abstracts/, base/, components/, pages/ + main.scss
│   ├── hooks/            # useFetch (hook personnalisé pour les appels API)
│   ├── assets/           # images, logo
│   ├── App.jsx           # Configuration du routeur
│   └── main.jsx          # Point d'entrée de l'application
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🎓 Compétences travaillées

- Développement d'une application **React** structurée en composants réutilisables
- Utilisation des **hooks** natifs (`useState`, `useEffect`, `useParams`) et création d'un **hook personnalisé**
- Mise en place d'une **navigation déclarative** avec React Router
- **Implémentation manuelle** de composants interactifs (carrousel, collapse) sans librairie externe
- Consommation d'une **API REST** locale avec `fetch`
- **Gestion des erreurs** : redirection vers une page 404 pour les URL invalides
- Architecture **Sass modulaire** en 7-1
- Respect strict de **maquettes Figma** en approche responsive

## 📦 Prérequis

- **Node.js** (version 16 ou supérieure)
- **npm**
- **Docker** (optionnel, pour lancer l'API facilement)

## 🚀 Installation

Le projet nécessite de lancer **deux serveurs** en parallèle : l'API (port 8080) et le front (port 5173).

### 1. Cloner le dépôt

```bash
git clone https://github.com/leaspadea/kasa.git
cd kasa
```

### 2. Lancer l'API (backend)

**Option A — avec Docker (recommandé)**

```bash
docker compose up -d
```

**Option B — avec Node**

```bash
cd backend
npm install
npm start
```

L'API tourne alors sur `http://localhost:8080` et expose les routes :
- `GET /api/properties` — liste des logements
- `GET /api/properties/:id` — détail d'un logement

### 3. Lancer le front

Dans un autre terminal, à la racine du projet :

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

## 🧰 Scripts disponibles

| Commande          | Description                                          |
|-------------------|------------------------------------------------------|
| `npm run dev`     | Lance le serveur de développement (Vite)             |
| `npm run build`   | Génère la version de production dans `/dist`         |
| `npm run preview` | Prévisualise le build de production en local         |
| `npm run lint`    | Analyse le code avec ESLint                          |

## 👤 Auteur

**Léa Spadea** — Étudiante Intégratrice Web @ OpenClassrooms
🔗 [LinkedIn](https://www.linkedin.com/in/lea-spadea/) · 💻 [GitHub](https://github.com/leaspadea)

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

---

*Projet réalisé dans le cadre de la formation Intégrateur Web (RNCP niveau 5) chez OpenClassrooms.*