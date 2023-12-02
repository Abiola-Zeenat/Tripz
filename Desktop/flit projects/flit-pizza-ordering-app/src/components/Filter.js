"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "../app/Products/products.module.css";

const Filter = () => {
  const [value, setValue] = useState("0");
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <button className={`${styles.primary_btn} btn`}>
          <Image src="/images/filter.png" width={18} height={18} alt="" />
          &nbsp; Filter
        </button>
      </div>
      <div className="col-12 col-md-6">
        <div className={styles.select}>
          <p>Showing all 9 results</p>
          <select
            className="form-select"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            <option value="0">Default Sorting</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
