import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className=" row py-5">
        <div className={`${styles.ft_col} col-12 col-md-3`}>
          <h3>INFORMATION</h3>

          <ul className={styles.info}>
            <li>Home</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Conact Us</li>
          </ul>
        </div>

        <div className={`${styles.ft_col} col-12 col-md-3`}>
          <h3>TOP ITEMS</h3>

          <ul className={styles.info}>
            <li>Pepperoni</li>
            <li>Swiss Mushroom</li>
            <li>Barbeque Chicken</li>
            <li>Vegetarian</li>
            <li>Ham & Cheese</li>
          </ul>
        </div>

        <div className={`${styles.ft_col} col-12 col-md-3`}>
          <h3>OTHERS</h3>

          <ul className={styles.info}>
            <li>Checkout</li>
            <li>Cart</li>
            <li>Product</li>
            <li>Locations</li>
            <li>Legal</li>
          </ul>
        </div>

        <div className={`${styles.ft_col} col-12 col-md-3`}>
          <h3>SOCIAL MEDIA</h3>

          <div className={styles.social}>
            <FaFacebookF
              color="white"
              size={40}
              class={`${styles.facebook} p-2 me-2`}
            />
            <FaPinterestP
              color="white"
              size={40}
              class={`${styles.pinterest} p-2 me-2`}
            />
            <FaTwitter
              color="white"
              size={40}
              class={`${styles.twitter} p-2 me-2`}
            />
            <FaInstagram
              color="white"
              size={40}
              class={`${styles.instagram} p-2`}
            />
          </div>

          <p className="my-3">
            Signup and get exclusive offers and coupon codes
          </p>

          <button className={`${styles.primary_btn} my-3`}>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
