import { reduxForm, Field } from 'redux-form';

const renderInput= ({input, meta:{ error, touched }}) => { 
  return ( 
    <div>
      <input {...input} type="text"  placeholder="Enter your products"/> 
      {touched && error} 
    </div>
  );
}

const AddProducForm = ({handleSubmit, addToCart, listOfProduct}) =>{
    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <div><label className="label">Enter name of products </label></div>
            <Field className="input" name="product" component={renderInput} /> <button onClick={addToCart}>Add</button>
          </div>
        </div>
        <button type="submit">Submit</button>
      <ul>
        {listOfProduct.map((value, index) => {
          return <li key={index}>{value.product}</li>
        })}
      </ul>
      </form>
    )
}

  function validate(value){
    const error={};
    // const index=listOfProduct.indexOf(value);
    // if(index>=0) {
    //   error.product="Duplicate product";
    // }
    // for(let i=0; i< arr.length; i++){
    //     if(arr[i]===value){
    //         error.product="Duplicate product";
    //     }
    // }
    return error;
  }
  
    
  
 export default (reduxForm)({
    validate,
    form: 'addProducForm',
  })(AddProducForm);