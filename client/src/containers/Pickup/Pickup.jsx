import React from 'react';

const Pickup = () => {
    return (
    <div className="row">
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
            
                <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          This is an inline input field:
          <div class="input-field inline">
            <input id="email_inline" type="email" class="validate"/>
            <label for="email_inline">Email</label>
            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </div>
            </div>
        </form>
        <div class="row">
    
      </div>
         <div class="input-field col s6">
         <i class="material-icons prefix">phone</i>
         <input id="icon_telephone" type="tel" class="validate"/>
         <label for="icon_telephone"></label>
       </div>
     </div>


       
    )
};

export default Pickup;