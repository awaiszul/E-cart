import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";

// import Product from './Product'

const Navbar = ({ setData, cart }) => {
  const location = useLocation()
  const [searchterm, setSearchterm] = useState("");
  const navigate = useNavigate();
  const filterbyCategory = (category) => {
    const elements = items.filter((Product) => Product.category === category);
    // console.log(elements);
    setData(elements);
  };
  const filterbyPrice = (price) => {
    const elements = items.filter((Product) => Product.price >= price);
    // console.log(elements);
    setData(elements);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchterm}`);
    setSearchterm("");
  };
  return (
    <>
      <header className="sticky-top">
        <div className="navbar">
          <Link to={"/"} className="brand-logo">
      
            Awais - Store
          </Link>
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchterm}
              onChange={(e) => setSearchterm(e.target.value)}
              type="text"
              placeholder="search for your favourite products"
            />
          </form>
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
            <i className="fa-solid fa-cart-shopping"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
            
          </Link>
        </div>

        {
          location.pathname =='/' &&(
            <div className="nav-bar-wrapper">
          <div className="items">Filter by {"->"}</div>
          <div onClick={() => setData(items)} className="items">
            No Filter
          </div>
          <div onClick={() => filterbyCategory("mobiles")} className="items">
            Mobiles
          </div>
          <div onClick={() => filterbyCategory("laptops")} className="items">
            Laptops
          </div>
          <div onClick={() => filterbyCategory("tablets")} className="items">
            Tablets
          </div>
          <div onClick={() => filterbyPrice(29999)} className="items">
            {">=29999"}
          </div>
          <div onClick={() => filterbyPrice(49999)} className="items">
            {">=49999"}
          </div>
          <div onClick={() => filterbyPrice(69999)} className="items">
            {">=69999"}
          </div>
          <div onClick={() => filterbyPrice(89999)} className="items">
            {">=89999"}
          </div>
        </div>
          )
        }
      </header>
    </>
  );
};

export default Navbar;
