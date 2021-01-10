import { reduxForm, Field } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const AddProducForm = ({wishList, cart}) =>{
  let dispatch = useDispatch();
  // const {wishList, cart } = useSelector(state=>({...state}));
  const [values, setValues ] = useState("");
  const renderInput= ({input, meta:{ error, touched }}) => { 
    return ( 
      <div>
        <input {...input} type="text"  placeholder="Enter your products"/> 
        {touched && error} 
      </div>
    );
  }
  const handleChange = (e) => {
    console.log("handleChange being called");
    setValues(e.target.value);
  };

  const handleSubmit = e=> {
    e.preventDefault();
    console.log("handleSubmit being called");
    wishList.push(values);
    console.log("wishList: "+JSON.stringify(wishList));
    dispatch({
      type: 'WISH_LIST',
      payload: wishList
    })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <div className="control">
          <div><label className="label">Enter name of products </label></div>
          {/* <Field onChange={handleChange("product")} className="input" name="product" component={renderInput} />  */}
          <input onChange={handleChange} className="input" name="product"/>
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

  // function validate (value) {
  //   error={}
  //   const wishListDuplicate = wishList.find(value);
  //   const cartDuplicate = cart.find(value);
  //   if((wishList.length>0&&wishListDuplicate) || (cart.length>0&&cartDuplicate)) {
  //     error.product = "The product has been added";
  //   }
  //   return error;
  // }
  
    
  
 export default (reduxForm)({
    // validate,
    form: 'addProducForm',
  })(AddProducForm);