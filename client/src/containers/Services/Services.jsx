import React from "react";
import M from "materialize-css";
import { Select } from "react-materialize";

const Services = () => {
  return (
    <div class="container">
      <h1>Dry Cleaning vs Laundry?</h1>
      <p>
        In dry cleaning we use a process that uses liquids other than water to
        clean clothes and other types of fabrics.
      </p>
      <div className="row">
        <div class="input-field col s12 m6">
          <Select value="">
            <option value="">Dry Clean Prices</option>
          </Select>
          <label>Images in select</label>
        </div>
        <div class="input-field col s12 m6">
          <Select>
            <option value="">Laundry Prices</option>
          <select class="icons">
          <option value="" data-icon="images/sample-1.jpg" class="left">
            dress shirts
          </option>
          <option value="" data-icon="images/office.jpg" class="left">
            pants
          </option>
          <option value="" data-icon="images/yuna.jpg" class="left">
            jeans
          </option>

          <label>Images in select</label>
          </select>
          </Select>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
