import React from "react";

function Jumbotron({ title, content, description, icon }) {
  return (
    <div className="jumbotron-container">
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1 jumbotron-card"> {/* Añadí una clase de color y otra para el Jumbotron grande */}
            <div className="card-content white-text">
              <span className="card-title">{title}</span>
              <p>{content}</p>
              <br />
              <a className="waves-effect waves-light btn">
                {description}
                <i className="material-icons right">{icon}</i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
