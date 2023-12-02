import React from "react";
import styles from "./Order.module.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={`${styles.tr} ${styles.th}`}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <span className={styles.id}>6553e94699e1964952785a2</span>
              </td>
              <td className={styles.td}>
                <span className={styles.customer}>08162648391</span>
              </td>
              <td className={styles.td}>
                <span className={styles.address}>10 John street</span>
              </td>
              <td className={`${styles.td} ${styles.total}`}>
                <span className={styles.total}>$120</span>
              </td>
            </tr>
          </table>
        </div>

        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/images/pay.png" width={30} height={30} alt="payment" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <FaCheckCircle color="green" size={30} />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/images/preparing.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <FaCheckCircle color="green" size={30} />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image
              src="/images/bike.png"
              width={30}
              height={30}
              alt="payment"
            />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <FaCheckCircle color="green" size={30} />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image
              src="/images/delivered.png"
              width={30}
              height={30}
              alt="payment"
            />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <FaCheckCircle color="green" size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.addToCart_wrap}>
          <h2 className={styles.title}>Cart Total</h2>
          <div className="mb-1">
            <span className="fw-bold me-2">Subtotal:</span>
            <span>$120</span>
          </div>
          <div className="mb-1">
            <span className="fw-bold me-2">Discount:</span>
            <span>$00.00</span>
          </div>
          <div className="mb-1">
            <span className="fw-bold me-2">Total:</span>
            <span>$120</span>
          </div>
          <button className={`${styles.primary_btn} fw-bold mt-4`}>PAID</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
