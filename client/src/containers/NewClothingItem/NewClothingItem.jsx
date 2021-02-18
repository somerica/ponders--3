import React, { useState } from "react";
import axios from "axios";
import ClothingForm from "../../components/ClothingForm/ClothingForm";

const NewClothingItem = () => {
  const handleFormSubmit = (e, ClothingData) => {
    e.preventDefault();
    axios
      .post("/api/clothing", ClothingData)
      .then((response) => {
        console.log(response.data);
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
        <ClothingForm handleFormSubmit={handleFormSubmit}/>
      </div>
    </div>
  );
};

export default NewClothingItem;
