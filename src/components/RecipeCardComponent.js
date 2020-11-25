import React from 'react';
import {Link} from 'react-router-dom';

function RecipeCard(props) {
    return (
        <div className="col-xl-3 col-md-4 col-sm-6 mb-4">
            <div className="card rCard">
                <img src={props.image} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Visited <b>{props.views} </b>times</p>
                    {props.updated && <p className="card-text"><small class="text-muted">Last Visited: <b>{props.updated}</b></small></p>}
                    <Link onClick={() => {props.clickView(props.id)}} to={`/recipes/${props.id}`} className="btn btn-secondary btn-sm">Check Recipe</Link>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;