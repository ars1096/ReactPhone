import React from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";

const CardPhone = (props) => {
  const onDelete = async (idPhone) => {
    if (window.confirm("¿Quieres eliminar este telefono ?")) {
      await db.collection("phone").doc(idPhone).delete();
    }
  };

  return (
    <div
      className="card"
      style={{
        textAlign: "center",
        width: "18rem",
        margin: "5px",
        float: "left",
      }}
    >
      <div style={{ display: "block",  width: "10%" }}>
        <button  className="btn">
          <i 
            className="material-icons text-danger"
            
            onClick={() => onDelete(props.id)}
          >
            close
          </i>
        </button>
      </div>

      <img
        style={{ width: "200px", height: "240px", margin: "auto" }}
        src={props.imgSrc}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.price}</p>

        <Link to={`/contacto/${props.id}`} className="btn btn-primary">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default CardPhone;
