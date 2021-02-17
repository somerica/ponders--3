import React, { useState } from "react";
import axios from "axios";
import ClothingForm from "../../components/ClothingForm/ClothingForm";

const NewClothingItem = () => {
  
  const handleFormsubit = (e ,ClothingData) => {
    e.preventdefault();
    axios
      .post("/api/clothing", )
      .then((response) => {
        console.log("yes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="center-align">Add New Clothing Item</h1>
        </div>
      </div>
      <div className="row">
        <ClothingForm handleFormSubmit={handleFormsubmit}/>
     </div>
    </div>
  );
};

export default NewClothingItem;
