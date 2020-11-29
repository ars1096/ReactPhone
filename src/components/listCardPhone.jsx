import React, { useEffect, useState } from "react";
import CardPhone from "./cardPhone";
import { db } from "../firebase";
import Spinner from "./spinner";

const ListCardPhone = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(loading)
  const getPhones = async () => {
    db.collection("phone").onSnapshot((querySanp) => {
      const aux = []; //add Id
      querySanp.forEach((doc) => {
        aux.push({ ...doc.data(), id: doc.id });
      });
      console.log(aux);
      setPhones(aux);
      setLoading(true);
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
        <div>
          {phones.map((cardPV) => (
            <CardPhone
              key={cardPV.id}
              title={cardPV.name}
              price={cardPV.price}
              imgSrc={cardPV.imageFile}
              id={cardPV.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListCardPhone;
