// ArticleCard.js
import React, { useState } from 'react';

const ArticleCard = ({ article }) => {
    // État local pour gérer l'affichage du contenu complet
    const [showMore, setShowMore] = useState(false);

    // Gestionnaire de clic pour afficher le contenu complet
    const handleShowMore = () => {
        setShowMore(true);
    };

    // Extraction de la date de publication de l'article
    const publicationDate = new Date(article.date);

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                {/* Titre de l'article */}
                <h5 className="card-title">{article.title.rendered}</h5>

                {/* Image en vedette de l'article */}
                {article.featured_media && (
                    <img
                        src={article.jetpack_featured_media_url}
                        className="card-img-top"
                        alt={article.title.rendered}
                        style={{ height: '200px', objectFit: 'cover' }}
                    />
                )}

                {/* Corps de la carte avec le contenu de l'article */}
                <div className="card-body">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: showMore ? article.content.rendered : `${article.content.rendered.substring(0, 100)}...`,
                        }}
                    />

                    {/* Date, heure de publication et auteur */}
                    <p className="card-text">
                        <small className="text-muted">
                            Published on {publicationDate.toLocaleDateString()} at {publicationDate.toLocaleTimeString()} by {article._embedded.author[0].name}
                        </small>
                    </p>

                    {/* Bouton pour afficher plus de contenu */}
                    {!showMore && (
                        <button className="btn btn-outline-success" onClick={handleShowMore}>
                            See more
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
