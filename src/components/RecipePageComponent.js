import React from "react";

function RecipePageComponent() {
  
    return (

    <div className="container">
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-5">
                        <h1 className="display-4">Papaya Salad</h1>
                        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="col-lg-7">
                        <img src="https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/41-papayasalad_0.jpg?itok=cTf0Y6QY" className="img-fluid" alt="Responsive image"/>
                    </div>

                </div>


                <div className="row mt-5">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <h4>Ingredients</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                    <div className="col-1"></div>

                </div>


                <div className="row mt-5">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <h4>Preperation</h4>
                        <p>Here is the preperation process..</p>
                    </div>
                    <div className="col-1"></div>

                </div>

            </div>
        </div>
    </div>
 
  );
}

export default RecipePageComponent;
