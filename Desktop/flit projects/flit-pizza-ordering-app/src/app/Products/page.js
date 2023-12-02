import React from "react";
import styles from "../page.module.css";

import Filter from "@/components/Filter";
import PizzaList from "@/components/PizzaList";

const Products = () => {
  return (
    <div className="container-fluid">
      <div className={styles.hero}>
        <Filter />

        <PizzaList />
      </div>
    </div>
  );
};

export default Products;
