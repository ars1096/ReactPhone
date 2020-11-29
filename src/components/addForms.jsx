import React, { useState } from "react";
import "../css/general.css";

const AddForms = (props) => {
 
  const iniVal = {
    name: "",
    manufacturer: "",
    description: "",
    color: "",
    price: "",
    imageFile: "https://res.cloudinary.com/adrianrs/image/upload/v1606613307/iphone-12-black-select-2020.png",
    ram: "",
    processor: "",
    screen: "",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState(iniVal);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditPhone(values);
    setValues({ ...iniVal });
  };

  return (
    <form
      className="card card-body"
      style={{ width: "40%", margin: "auto" }}
      onSubmit={handleSubmit}
    >
      <div className="form-group input-group">
        <div className="input-group-test bg-light d-flex align-items-center">
          <i className="material-icons">phone_iphone</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-test bg-light d-flex align-items-center">
          <i className="material-icons">title</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Manufacturer"
          name="manufacturer"
          onChange={handleChange}
          value={values.manufacturer}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-test bg-light d-flex align-items-center">
          <i className="material-icons">sort</i>
        </div>
        <textarea
          type="text"
          className="form-control"
          placeholder="Description"
          name="description"
          onChange={handleChange}
          value={values.description}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-test bg-light d-flex align-items-center">
          <i className="material-icons">color_lens</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Color"
          name="color"
          onChange={handleChange}
          value={values.color}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-test bg-light d-flex align-items-center">
          <i className="material-icons">attach_money</i>
        </div>
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          name="price"
          style={{ WebkitAppearance:"none", margin: 0 }}
          onChange={handleChange}
          value={values.price}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-test bg-light d-flex align-items-center">
          <i className="material-icons">settings</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Processor"
          name="processor"
          onChange={handleChange}
          value={values.processor}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-test bg-light d-flex align-items-center">
          <i className="material-icons">visibility</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Screen"
          name="screen"
          onChange={handleChange}
          value={values.screen}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-test bg-light d-flex align-items-center">
          <i className="material-icons">tune</i>
        </div>
        <input
          type="number"
          style={{ WebkitAppearance: "none" }}
          className="form-control"
          placeholder="Ram"
          name="ram"
          onChange={handleChange}
          value={values.ram}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-test bg-light d-flex align-items-center">
          <i
            style={{ display: "block", margin: "auto" }}
            className="material-icons"
          >
            image
          </i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="imageFile"
          name="imageFile"
          onChange={handleChange}
          value={values.imageFile}
        />
      </div>

      <button className="btn btn-primary btn-block">Guardar Telefono</button>
    </form>
  );
};

export default AddForms;
