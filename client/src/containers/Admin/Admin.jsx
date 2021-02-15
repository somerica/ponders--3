import React from 'react';

const Admin = () => {
    return(
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
              <input placeholder="Clothing Item" id="item" type="text" />
              <label htmlFor="title">Clothing Item</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Clothing Price" id="price" type="text" />
              <label htmlFor="price">Clothing Price</label>
            </div>
          </div>

          <div className="row">
          <div class="input-field col s12">
            <input placeholder="Clothing description" id="description" type="text"/>
            <label htmlFor="description">Clothing Description</label>
          </div>
          </div>
          <div class="row">
          <div class="input-field col s12">
             <input placeholder= "Clothing Image" id="imageURL" type="text"/>
            <label htmlFor="imageURL">Clothing Image</label>
          </div>
         </div>
         <a class="waves-effect waves-light btn-small"><i class="material-icons left"></i>Add</a>
        
         <a class="waves-effect waves-light btn-small"><i class="material-icons right"></i>Delete</a>
        
        </form>
      </div>
    </div>
  );
};
    


export default Admin;