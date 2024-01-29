import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../actions/productAction";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const products = useSelector((state) => state.products.products);
  console.log(products);

  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to E-commerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        {products &&
          products.map((value, index) => {
            return <Product product={value} key={value._id} />;
          })}
      </div>
    </Fragment>
  );
};

export default Home;
