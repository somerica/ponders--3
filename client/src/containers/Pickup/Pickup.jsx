import React from "react";
import M from "materialize-css";
import { DatePicker, Select } from "react-materialize";

const Pickup = () => {
  return (
    <>
      <div className="container">
        <h1>Like to Schedule a Pick-up?</h1>
        <form className="col s12" action="">
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder=""
                id="first_name"
                type="text"
                className="validate"
              />
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" clas="validate" />
              <label for="last_name"> Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix"></i>
              <input id="icon_telephone" type="tel" className="validate" />
              <label for="icon_telephone">Telephone</label>
            </div>
          </div>
          <div class="row">
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
              ></textarea>
              <label for="textarea1">Message</label>
            </div>
          </div>
          <div className="row">
            <DatePicker />
          </div>
          <div>
            <Select>
          <div className="input-field col s6">
            <label>Time Select</label>
            <select class="Select Pick-up Time">
              <option value="" disabled selected>
              Select Pick-up Time
              </option>
              <option value="1">9am-11am</option>
              <option value="2">12pm-2pm</option>
              <option value="3">3pm-5pm</option>
            </select>
            </div>
            </Select>
          </div>
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Pickup;
