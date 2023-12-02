import Image from "next/image";
import styles from "./Navbar.module.css";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_img}>
        <Image
          src="/images/pizza-header-img.png"
          alt=""
          width={200}
          height={100}
        />
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image
              src="/images/pizza-logo.png"
              alt=""
              width={100}
              height={100}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className={`${styles.navItem} nav-item`}>
                <Link className="nav-link" href="/">
                  HOME
                </Link>
              </li>
              <li className={`${styles.navItem} nav-item`}>
                <Link className="nav-link" href="/Products">
                  PRODUCTS
                </Link>
              </li>
              <li className={`${styles.navItem} nav-item`}>
                <a className="nav-link" href="#">
                  PAGES
                </a>
              </li>
              <li className={`${styles.navItem} nav-item`}>
                <a className="nav-link">BlOG</a>
              </li>
              <li className={`${styles.navItem} nav-item`}>
                <a className="nav-link">CONTACT</a>
              </li>
            </ul>

            <div className={styles.search}>
              <div className="mx-3">
                <FaSearch />
              </div>
              <Link href="/Cart" passHref>
                <div className="">
                  <FaShoppingCart color="#1971c2" size={24} />
                  <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                    {/* {quantity} */}0
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
