import React from 'react';

const Pickup = () => {
    return (

<div className="container">
        <form className="col s12" action="">
            <div className="row">
                <div className="input-field col s6">
                    <input placeholder="" id="first_name" type="text" className="validate"/>
                    <label for="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                    <input id = "last_name" type="text" clas="validate"/>
                    <label for ="last_name"> Last Name</label>
                </div>
           </div>
           <div className="row">
               <div className="input-field col s12">
                   <input id="email" type="email" class="validate"/>
                   <label for="email">Email</label>
                </div>
            </div>
            <div className="input-field col s6">
          <i className="material-icons prefix"></i>
          <input id="icon_telephone" type="tel" className="validate"/>
          <label for="icon_telephone">Telephone</label>
        </div>
        <div class="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label for="textarea1">Message</label>
        </div>
        <div></div>
        <input type="text" class="datepicker"></input>
        <input type="text" class="timepicker"></input>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right"></i>
  </button>
       </form>
</div>
     
 

    )
};

export default Pickup;