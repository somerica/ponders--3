import React, { useState } from "react";

const NewClothingItem = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setimageURL] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="center-align">Add New Clothing Item</h1>
        </div>
      </div>
      <div className="row">
        <form action="">
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Clothing Item"
                id="item"
                type="text"
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <label htmlFor="title">Clothing Item</label>
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Clothing Price"
                id="price"
                type="text"
                name="price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
              <label htmlFor="price">Clothing Price</label>
            </div>
          </div>

          <div className="row">
            <div class="input-field col s12">
              <input
                placeholder="Clothing description"
                id="description"
                type="text"
                name="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <label htmlFor="description">Clothing Description</label>
            </div>
            <div className="row">
              <div className="input-field cpl s12">
                <input
                  placeholder="Clothing image"
                  id="imageURL"
                  type="text"
                  name="imageURL"
                  value={imageURL}
                  onChange={(e) => {
                    setimageURL(e.target.value);
                  }}
                />
                <label htmlFor="imageURL">Clothing Image</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button className="waves-light button">Add New Item</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewClothingItem;
