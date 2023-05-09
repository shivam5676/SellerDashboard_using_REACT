import React from "react";
const DataOnScreen = (props) => {
  console.log(props);
  const parentElectronic = document.getElementById("Electronic items");
  const parentFood = document.getElementById("Food items");
  const parentSkincare = document.getElementById("Skincare items");
  const childelement = document.createElement("li");
  childelement.id = "list";
  childelement.textContent =
    props.FormData.id +
    "=>" +
    props.FormData.name +
    "=>" +
    props.FormData.price +
    "=>" +
    props.FormData.category;
  if (props.FormData.category == "Electronic items") {
    parentElectronic.appendChild(childelement);
  }
  if (props.FormData.category == "Food items") {
    parentFood.appendChild(childelement);
  }
  if (props.FormData.category == "Skincare items") {
    parentSkincare.appendChild(childelement);
  }

  return (
    <React.Fragment>
      <li id="Electronic items">
        <h2>Electronic items</h2>
      </li>
      <li id="Food items">
        <h2>Food items</h2>
      </li>
      <li id="Skincare items">
        <h2>Skincare items</h2>
      </li>
    </React.Fragment>
  );
};
export default DataOnScreen;
