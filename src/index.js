// Importation des modules React nécessaires
import React from 'react';
import ReactDOM from 'react-dom';

// Importation des composants personnalisés
import Footer from './footer';
import App from './App';

// Rendu du composant App dans la racine de l'élément avec l'ID 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);