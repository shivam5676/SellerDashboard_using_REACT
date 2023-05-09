import React, { useState } from "react";
const AdminPanel = (props) => {
  const [intialId, setIntialId] = useState("");
  const [intialName, setIntialName] = useState("");
  const [intialSellingPrice, setIntialSellingPrice] = useState("");
  const [intialCategory, setIntialCategory] = useState("");
  const idHandler = (event) => {
    setIntialId(event.target.value);
  };
  const nameHandler = (event) => {
    setIntialName(event.target.value);
  };
  const SellingPriceHandler = (event) => {
    setIntialSellingPrice(event.target.value);
  };
  const categoryhandler = (event) => {
    setIntialCategory(event.target.value);
  };
  const FormData = {
    id: intialId,
    name: intialName,
    price: intialSellingPrice,
    category: intialCategory,
  };

  const formDataHandler = (event) => {
    event.preventDefault();
    localStorage.setItem(intialId, JSON.stringify(FormData));
    props.submitForm(FormData);

    setIntialCategory("");
    setIntialId("");
    setIntialName("");
    setIntialSellingPrice("");
  };

  return (
    <React.Fragment>
      <form onSubmit={formDataHandler}>
        <label>Product id</label>
        <input type="number" value={intialId} onChange={idHandler}></input>
        <label>ITEM NAME</label>
        <input type="text" value={intialName} onChange={nameHandler}></input>
        <label>Selling Price</label>
        <input
          type="number"
          value={intialSellingPrice}
          onChange={SellingPriceHandler}
        ></input>
        <label>CHOOSE A CATEGORY</label>
        <select onChange={categoryhandler} id="category">
          <option>Electronic items</option>
          <option>Food items</option>
          <option>Skincare items</option>
        </select>
        <button>submit</button>
      </form>
    </React.Fragment>
  );
};
export default AdminPanel;
