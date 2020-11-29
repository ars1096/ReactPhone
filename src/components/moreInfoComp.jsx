import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import Spinner from "./spinner";

const MoreInfoComp = () => {
  let { id } = useParams();

  let auxQuery = "";
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPhones = async () => {
    await db
      .collection("phone")
      .doc(id)
      .get()
      .then((docRef) => {
        auxQuery = docRef.data();
        setPhones(auxQuery);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div>
      {!loading ? (
        <Spinner />
      ) : (
        <div
          style={{
            width: "50%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm  position-relative">
            <div className="col-auto d-none d-lg-block">
              <img
                className="bd-placeholder-img"
                width="200"
                height="250"
                src={phones.imageFile}
                focusable="false"
                aria-label="Placeholder: Thumbnail"
              ></img>
            </div>
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                {" "}
                {phones.name}
              </strong>
              <h3 className="mb-0"></h3>
              <div className="mb-1 text-muted">{phones.manufacturer}</div>
              <p className="card-text mb-auto">{phones.description}</p>
              <div className="mb-1 text-muted">Especificaciones:</div>
              <p className="card-text mb-auto">Color: {phones.color}</p>
              <p className="card-text mb-auto">Processor: {phones.processor}</p>
              <p className="card-text mb-auto">Ram: {phones.ram}</p>
              <p className="card-text mb-auto">Screen: {phones.screen}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreInfoComp;
