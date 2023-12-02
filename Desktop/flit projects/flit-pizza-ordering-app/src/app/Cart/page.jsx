"use client";

import React, { useState } from "react";
import styles from "./Cart.module.css";
import Image from "next/image";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CashOrder from "@/components/CashOrder";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);

  return (
    <div className={`${styles.container} container-fluid`}>
      <div className={styles.table}>
        <table className="table">
          <tr className="ms-2 border-bottom">
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          <tr className="border-bottom">
            <td className="">
              <div className=" ">
                <Image
                  src="/images/burger.jpg"
                  width={100}
                  height={100}
                  className=""
                  alt=""
                />
              </div>
            </td>

            <td>
              <span>Burga Pizza</span>
            </td>

            <td>
              <span>Double ingredient, spicy sauce</span>
            </td>

            <td>
              <span>$30</span>
            </td>

            <td>
              <span>4</span>
            </td>

            <td>
              <span className="fw-bold">$120</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.addToCart}>
        <div className={styles.addToCart_wrap}>
          <h2 className={styles.title}>CART TOTAL</h2>

          <div>
            <b className="me-2">Subtotal:</b> $120
          </div>

          <div>
            <b className="me-2">Discount:</b> $79.60
          </div>

          <div>
            <b className="me-2">Total:</b> $120
          </div>

          {open ? (
            <div className={styles.payment}>
              <button
                className={`${styles.cash_payment}`}
                onClick={() => setCash(true)}
              >
                CASH ON DELIVERY
              </button>

              {/* Paypal button*/}
              <PayPalScriptProvider
                options={{
                  clientId:
                    "AV5eSNr1jwWEQena8VbrbFEnR5wdxAHJsdC_a6P7ybWQ3Na_rpE9Qg9OrcK2KIPjYrsx3HF45tO-bz93",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <PayPalButtons
                  style={{
                    color: "gold",
                    shape: "rect",
                    label: "pay",
                    height: 50,
                  }}
                />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className={`${styles.button} pizza_btn mt-5`}
            >
              CHECKOUT NOW!
            </button>
          )}
        </div>
        {cash && <CashOrder total="$120" createOrder="{createOrder}" />}
      </div>
    </div>
  );
};

export default Cart;
