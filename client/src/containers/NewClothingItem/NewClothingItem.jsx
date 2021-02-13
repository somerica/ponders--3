import React from 'React';

const NewClothingItem = () => {
    return(
        <div className ="container">
            <div className ="row">
                <div className ="col">
                    <h1 className="center-align">Add New Clothing Item</h1>
                </div>
            </div>
<div className="row">
  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <input placeholder="Clothing Item" id="item" type="text">
        <label htmlFor="title">Clothing Item</label>
      </div>
      <div className="input-field col s6">
        <input placeholder="Clothing Price" id= "price" type="text"/>
        <label htmlFor ="price">Clothing Price</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input disabled value="I am not editable" id="disabled" type="text" class="validate"/>
        <label for="disabled">Disabled</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="password" type="password" class="validate"/>
        <label for="password">Password</label>
      </div>
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
</div>
    )
}