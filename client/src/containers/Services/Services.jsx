import React from "react";

const Services = () => {
  return (
    <div class="container">
        <div className="row">
      <div class="input-field col s12 m6">
        <select class="icons">
          <option value="" disabled selected>
            Choose your option
          </option>
          <option value="" data-icon="images/sample-1.jpg">
            example 1
          </option>
          <option value="" data-icon="images/office.jpg">
            example 2
          </option>
          <option value="" data-icon="images/yuna.jpg">
            example 3
          </option>
        </select>
        <label>Images in select</label>
      </div>
      <div class="input-field col s12 m6">
        <select class="icons">
          <option value="" disabled selected>
            Choose your option
          </option>
          <option value="" data-icon="images/sample-1.jpg" class="left">
            example 1
          </option>
          <option value="" data-icon="images/office.jpg" class="left">
            example 2
          </option>
          <option value="" data-icon="images/yuna.jpg" class="left">
            example 3
          </option>
        </select>
        <label>Images in select</label>
      </div>
    </div>
    </div>
  );
};

export default Services;
