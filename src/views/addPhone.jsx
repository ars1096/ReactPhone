import React from "react";
import Addforms from "../components/addForms";
import {db} from '../firebase';

const AddPhone = () => {

  const addOrEditPhone =  async ( phoneObj) => {
    await db.collection('phone').doc().set(phoneObj);

  }

    return <Addforms addOrEditPhone={addOrEditPhone}/>;
  
}

export default AddPhone;
