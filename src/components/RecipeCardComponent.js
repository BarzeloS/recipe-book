import React from 'react';

function RecipeCard(props) {
    return (
        <div className="col-xl-3 col-md-4 col-sm-6 mb-4">
            <div className="card rCard">
                <img src={props.image} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Views: {props.views} </p>
                    <p className="card-text">Last Updated: ????</p>
                    <a href="#" className="btn btn-outline-info btn-sm">Check Recipe</a>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;