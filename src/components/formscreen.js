import React, { useState } from "react";
import schema from "../Validation/formSchema";
import * as yup from "yup";

const initialFormValues = {
  
  name: '',
  
  size: '',
 
  pep: false,
  chicken: false,
  veggies: false,
  sausage: false,

  specialInstructions: '',
};

const initialFormErrors = {
 name: '',
}
const FormScreen = () => {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }
  const inputChange = (ev) => {
    validate(ev.target.name, ev.target.value);
    setFormValues({
      ...formValues,
      [ev.target.name]: ev.target.value
    })
  };
  return (
      <>
         <div className='errors'>
          <div>{formErrors.name}</div>
        </div>
        <form id="pizza-form">
            <label>
                <input id="name-input" placeholder="Name" name="name" value={formValues.name} onChange={inputChange}/>
            </label>
            <label>Choice of Size!
            <select id="size-dropdown">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            </select>
            </label>
            <div>
            <label>Pepperoni
            <input id="Pep" type="checkbox"/>
            </label>
            <label>Chicken
            <input id="Chicken" type="checkbox"/>
            </label>
            <label>Vegatables
            <input id="Veggies" type="checkbox"/>
            </label>
            <label>Sausage
            <input id="Sausage" type="checkbox"/>
            </label>
            </div>
            <label>
                <input id="special-text" placeholder="Special Instructions" />
            </label>
            <button id="order-button">submit</button>
        </form>
      </>
    );
  };
  export default FormScreen;

