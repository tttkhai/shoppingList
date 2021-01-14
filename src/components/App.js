import '../index.css';
import Cart from './Cart';
import WishList from './WishList';
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const App = ({ errors }) => {
  const { wishList, cart } = useSelector((state) => ({ ...state }));
  return (
    <div className="App">
      <Form>
        <Field type="text" name="product" placeholder="Add a product" />
        <div style={{ color: "red" }}> {errors.product} </div>
        <button type="submit">Add</button>
      </Form>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px"
        }}
      >
        <WishList wishList={wishList} cart={cart} />
        <Cart wishList={wishList} cart={cart} />
      </div>
    </div>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ product }) {
    return {
      product: product || ""
    };
  },
  handleSubmit(values, { props, setErrors, resetForm }) {
    if (values.product === "") {
      return;
    }

    if (
      props.wishList.includes(values.product) ||
      props.cart.includes(values.product)
    ) {
      setErrors({ product: "The product has been added" });
      return;
    }

    props.wishList.push(values.product);
    props.addToWishList(props.wishList)
    resetForm();
  }
})(App);

function mapStateToProps({ cart, wishList }) {
  return { cart, wishList };
}

function mapDispatchToProps(dispatch) {
  return { addToWishList: (data) => dispatch({type: 'ADD_TO_WISH_LIST', payload: data}) }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormikApp);
