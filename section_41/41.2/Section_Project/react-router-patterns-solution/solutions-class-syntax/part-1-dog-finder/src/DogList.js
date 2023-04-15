import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <div className="row mt-4">
          <div className="col">
            <h1 className="text-center">
              HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO.
            </h1>
          </div>
        </div>
        <div className="row">
          {this.props.dogData.map(d => (
            <div className="col-3 text-center" key={d.name}>
              <img src={d.src} alt={d.name} />
              <h3 className="mt-3">
                <Link to={`/dogs/${d.name}`}>{d.name}</Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;
