"use client";

import React, { useState } from "react";
import styles from "../products.module.css";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

const pizza = {
  id: 1,
  src: "/images/burger.jpg",
  name: "Burga Pizza",
  price: [20, 25, 30],
};
const Pizza = () => {
  const [size, setSize] = useState(0);
  return (
    <div className={`${styles.product} row`}>
      <div className="col-12 col-md-6 px-3">
        <Image src={pizza.src} alt="" width={550} height={550} />
      </div>
      <div className="col-12 col-md-6 mt-5 px-3">
        <h1>{pizza.name}</h1>
        <span style={{ color: "#dc3545", fontWeight: "bold", fontSize: 18 }}>
          ${pizza.price[size]}
        </span>{" "}
        &nbsp;
        <span style={{ color: "#c2bfbf", fontWeight: "bolder" }}>
          8 Reviews
        </span>
        <p>{`This is ${pizza.name}`}</p>
        <p>Category: Chicken, Launch, Pizza, Burger</p>
        <p>Tag: Healthy, Organic, Chicken, Sauce</p>
        <h5 className="mt-5">Choose Pizza Size</h5>
        <div className={`${styles.sizes} my-3 `}>
          <div className="" onClick={() => setSize(0)}>
            <Image
              src="/images/pizza-size.png"
              width={40}
              height={40}
              alt="size"
            />
            <span className="position-absolute translate-middle badge rounded-pill bg-danger">
              Small
            </span>
          </div>
          <div className="" onClick={() => setSize(1)}>
            <Image
              src="/images/pizza-size.png"
              width={60}
              height={60}
              alt="size"
            />
            <span className="position-absolute translate-middle badge rounded-pill bg-danger">
              Medium
            </span>
          </div>
          <div className="" onClick={() => setSize(2)}>
            <Image
              src="/images/pizza-size.png"
              width={80}
              height={80}
              alt="size"
            />
            <span className="position-absolute translate-middle badge rounded-pill bg-danger">
              Large
            </span>
          </div>
        </div>
        <h5 className="mt-5">Choose additional ingredients</h5>
        <div>
          <input type="checkbox" id="sauce" name="sauce" className="me-1" />
          <label htmlFor="sauce">Sauce</label>
        </div>
        <div className="mt-5">
          <input type="number" defaultValue={1} className="py-2" />
          <button className={`${styles.primary_btn} fw-bold ms-3`}>
            ADD TO CART
          </button>
          <CiHeart size={30} className={styles.heart} />
        </div>
      </div>
    </div>
  );
};

export default Pizza;
