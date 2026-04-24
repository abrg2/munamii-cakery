# Munamii Cakery

A modern, responsive React-based website for Munamii Cakery, showcasing delicious cupcakes and wedding cakes.

## 🌟 Features

- **Responsive Design**: Optimized for all device sizes
- **Multi-page Navigation**: Home, Products, About, and Contact pages
- **Modern UI**: Clean, attractive design with colored menu buttons
- **Fast Loading**: Built with React for optimal performance
- **SEO Friendly**: Proper routing and meta tags

## 🛠️ Tech Stack

- **Frontend**: React 19.2.5
- **Routing**: React Router 7.14.1
- **Build Tool**: Create React App
- **Styling**: CSS Modules
- **Deployment**: GitHub Pages
- **Testing**: Jest + React Testing Library

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abrg2/munamii-cakery.git
   cd munamii-cakery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys the app to GitHub Pages

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── Hero.js         # Hero section
│   ├── Menu.js         # Navigation menu
│   ├── Card.js         # Product cards
│   └── Cards.js        # Cards container
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── Products.js     # Products showcase
│   ├── About.js        # About the cakery
│   └── Contact.js      # Contact information
├── App.js              # Main app component
├── App.css             # App-wide styles
└── index.js            # App entry point
```

## 🌐 Deployment

The app is deployed on GitHub Pages at: [https://abrg2.github.io/munamii-cakery](https://abrg2.github.io/munamii-cakery)

To deploy updates:
```bash
npm run deploy
```

## 📝 Notes

- Images sourced from Unsplash
- Built as a portfolio project to refresh React skills
- Contact form not implemented to keep deployment simple
- Uses standard React patterns with components and pages folders