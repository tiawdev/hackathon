// Importations nécessaires depuis React et ReactDOM
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Importation des composants locaux
import './index.css'; // Assurez-vous d'importer le fichier CSS approprié
import Footer from './footer';
import ArticleCard from './ArticleCard';

// Définition du composant principal App
const App = () => {
  // États pour gérer les données et le comportement dynamique
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [footerData, setFooterData] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  // Effet useEffect pour effectuer des actions après le rendu initial
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fonction asynchrone pour récupérer les données du footer depuis l'API
        const response = await fetch('https://techcrunch.com/wp-json/wp/v2/posts?_embed');
        if (!response.ok) {
          throw new Error(`Erreur de chargement des articles: ${response.statusText}`);
        }

        const data = await response.json();
        setArticles(data);
        setFilteredArticles(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };





    // Appel de la fonction fetchData
    fetchData();

    // Fonction asynchrone pour récupérer les données du footer depuis l'API
    const fetchFooterData = async () => {
      try {
        const response = await fetch('https://techcrunch.com/wp-json/wp/v2/pages/2?_embed');
        if (!response.ok) {
          throw new Error(`Erreur de chargement du footer: ${response.statusText}`);
        }

        const data = await response.json();
        setFooterData(data);
      } catch (error) {
        console.error(`Erreur lors de la requête du footer: ${error.message}`);
      }
    };

    // Appel de la fonction fetchFooterData
    fetchFooterData();

    // Gestionnaire d'événement pour mettre à jour la position de défilement
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Ajout et suppression de l'écouteur d'événement de défilement
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Le tableau vide signifie que useEffect s'exécute une seule fois après le montage initial

  // Tableau d'objets représentant des liens sociaux
  const socialLinks = [
    { name: 'Facebook', iconClass: 'fab fa-facebook-f', link: 'https://www.facebook.com/' },
    { name: 'Instagram', iconClass: 'fab fa-instagram', link: 'https://www.instagram.com/' },
    { name: 'LinkedIn', iconClass: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/' },
  ];

  // Tableau d'objets représentant des liens pour la barre latérale
  const sidebarLinks = [
    { name: 'LOGIN', link: 'https://login.techcrunch.com/?src=techcrunch&client_id=dj0yJmk9Ykh1ZTdaUEJPRHhJJmQ9WVdrOVFsWTJjV0YwTldFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1jNw--&crumb=SpvNriLNyLZ&redirect_uri=https%3A%2F%2Foidc.techcrunch.com%2Fcallback&prompt=login&done=https%3A%2F%2Fapi.login.techcrunch.com%2Foauth2%2Fauthorize%3Fclient_id%3Ddj0yJmk9Ykh1ZTdaUEJPRHhJJmQ9WVdrOVFsWTJjV0YwTldFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1jNw--%26nonce%3DlqKFNPVKFiJ9VNgzRHPuqw8ncQcHNnK8%26redirect_uri%3Dhttps%253A%252F%252Foidc.techcrunch.com%252Fcallback%26response_type%3Dcode%26scope%3Dopenid%2Bguce-w%2Bopenid2%2Bsdps-r%26src%3Dtechcrunch%26state%3DeyJhbGciOiJSUzI1NiIsImtpZCI6IjZmZjk0Y2RhZDExZTdjM2FjMDhkYzllYzNjNDQ4NDRiODdlMzY0ZjcifQ.eyJyZWRpcmVjdFVyaSI6Imh0dHBzOi8vdGVjaGNydW5jaC5jb20vc3UgIHJlY2lwZXIvY29udGFjdC90ZWjaIGNydW5jaC9yZWRpcmVjdC1pbi1sYXRlcmFsaXN0ZWQtb25seS1hcHAtdmVyc2lvbi1vZi1kZWFsJz90ZXBjYz1ob21lcGFnZXRvdXQifQ.hEacviUyIEgSb9RkmrOg_eI-WU40Zd4uM5qFdXSVpZrmRQor4sqUBWdWNOU6RbYgWJXHgrCS_ZcV9xNsXzjSJWtHT15eGnYZzL93BcH9yTW5uS7dz9fPWWI8Xg4VlEOlC3j0bgJ9zmrB2aL4FzD_ZLm25V5wjhJ97lK6_AuY8vTc' },
    { name: 'TECHCRUNCH +', link: 'https://techcrunch.com/techcrunchplus/?tpcc=ecleftnav' },
    { name: 'Startups', link: 'https://techcrunch.com/category/startups/' },
    { name: 'Venture', link: 'https://techcrunch.com/category/venture/' },
    { name: 'Security', link: 'https://techcrunch.com/category/security/' },
    { name: 'AI', link: 'https://techcrunch.com/category/artificial-intelligence/' },
    { name: 'Crypto', link: 'https://techcrunch.com/category/cryptocurrency/' },
    { name: 'Apps', link: 'https://techcrunch.com/category/apps/' },
    { name: 'Events', link: 'https://techcrunch.com/events/' },
    { name: 'Startups Battlefield', link: 'https://techcrunch.com/startup-battlefield/' },
    { name: 'More', link: 'https://techcrunch.com/events/' },
  ];

  // Fonction pour gérer la soumission du formulaire de recherche
  const onSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim() === '') {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter((article) =>
        article.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredArticles(filtered);
    }
  };




  // Classes pour gérer les styles en fonction de la position de défilement
  const sidebarClass = scrollPosition > 0 ? 'col-md-3 sidebar-fixed' : 'col-md-3';
  const contentClass = scrollPosition > 0 ? 'col-md-9 offset-md-3 content-scrolled' : 'col-md-9';

  // Rendu du composant avec la structure HTML et les conditions d'affichage
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={sidebarClass}>
          <nav id="sidebar" className={sidebarClass}>
            <img src="logotc.jpeg" alt="" />
            <div className="sidebar-header text-warning fw-bold">
              <a
                className="button button--secondary button--subscribe"
                rel="https://techcrunch.com/subscribe?tpcc=homepagetout"
                aria-label="Subscribe"
                data-ga-event-category="global navigation"
                data-ga-event-action="click"
                data-ga-event-label="Join TechCrunch+"
                data-datalayer="{&quot;event&quot;: &quot;navigation&quot;,&quot;clickText&quot;: &quot;Join TechCrunch+&quot;}"
                href="/subscribe?tpcc=homepagetout"
              >
                Join TechCrunch<span className="logo--plus">+</span>
              </a>
            </div>
            <ul className="list-unstyled components">
              {sidebarLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">
                    <i className={link.iconClass}></i>
                  </a>
                ))}
              </div>
            </ul>
          </nav>
        </div>
        <div className={contentClass}>
          <div className="site-data">
            <div className="navbar">
              <nav className="navbar fixed-top">
                <div className="container-fluid">
                  <a className="font-italic text-white fw-bold">....Welcome to TechCrunch</a>
                  <form className="d-flex" onSubmit={onSubmit}>
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      onClick={onSubmit}
                    >
                      Search
                    </button>
                  </form>
                </div>
              </nav>
            </div>
            {loading && <p>Chargement...</p>}
            {error && <p>Erreur: {error}</p>}
            {filteredArticles.length > 0 && (
              <div>
                <h2>Articles</h2>
                <div className="row">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            )}
            {footerData && <Footer footerLinks={footerData.acf.footer_links} />}

          </div>
        </div>
      </div>
    </div >
  );
};


// Rendu du composant App dans l'élément avec l'ID 'root'
ReactDOM.render(<App />, document.getElementById('root'));

// Exportation du composant App par défaut
export default App;
