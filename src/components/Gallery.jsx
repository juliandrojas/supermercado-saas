import React from "react";

function Gallery({ sectionTitle, urlImage,cardTitle, cardContent, description, icon }) {
  return (
    <>
    <h1 className="col s12 center-align"> {sectionTitle} </h1>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={urlImage} />
            </div>
            <div className="card-content">
            <span className="card-title">{cardTitle}</span>
              <p>
                {cardContent}
              </p>
            </div>
            <div className="card-action">
            <a className="waves-effect waves-light btn">
                {description}
                <i className="material-icons right">{icon}</i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
