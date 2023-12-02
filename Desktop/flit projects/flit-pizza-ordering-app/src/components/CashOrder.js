import React, { useState } from "react";
import Link from "next/link";
import styles from "../app/Cart/Cart.module.css";

const CashOrder = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  // const handleClick = () => {
  //   createOrder({ customer, address, total, method: 0 });
  // };

  return (
    <div className={styles.DetailWrapper}>
      <div className={styles.DetailContainer}>
        <h2>You will pay $120 on delivery.</h2>
        <div className={styles.DetailItem}>
          <label className="mb-2">Name Surname</label>

          <input
            type="text"
            placeholder="John Doe"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>

        <div className={styles.DetailItem}>
          <label className="mb-2">Phone Number</label>

          <input
            type="text"
            placeholder="+234 703 46 36"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>

        <div className={styles.DetailItem}>
          <label className="mb-2">Adress</label>

          <textarea
            rows={5}
            placeholder="10 John street"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <Link href="../Order">
          <button className={styles.primary_btn}>Order</button>
        </Link>
      </div>
    </div>
  );
};

export default CashOrder;
