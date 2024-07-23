// src/components/Card.js
import React, {  } from 'react';
import { Link } from 'react-router-dom';


const Card = ({ cards, page,buttonText, movieLink = false, id }) => {
    
      

    return (
        <div className="row">
            {cards.map((card, index) => (
                <div key={index} className="col-md-4">
                    { movieLink ?  (
                        <Link to={`/movie/${card.id}`} >
                            {console.log(card.id)}
                            <div className="card m-2" style={{ width: '18rem' }}>
                        <img src={card.image} className="card-img-top" alt='..' />
                        <div className="card-body">
                            <h5 className="card-title">{card.name}</h5>
                            <p className="card-text">{card.description}</p>
                            <small className="card-text">{card.extraDetail}</small>
                            <hr />
                            <Link to={`/${page}`} className="btn btn-primary">{buttonText}</Link>
                        </div>
                    </div>
                       </Link> 
                    ) : (
                        <div className="card m-2" style={{ width: '18rem' }}>
                        <img src={card.image} className="card-img-top" alt='..' />
                        <div className="card-body">
                            <h5 className="card-title">{card.name}</h5>
                            <p className="card-text">{card.description}</p>
                            <small className="card-text">{card.extraDetail}</small>
                            <hr />
                            <a href={`/${page}`} className="btn btn-primary">{buttonText}</a>
                        </div>
                    </div>
                    )}
                    
                </div>
            ))}
        </div>
    );
};

export default Card;
