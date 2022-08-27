import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="imgBox">
            <img src={props.imagesrc} alt="MyPic" className="card__img" />
          </div>
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button className="btn">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
