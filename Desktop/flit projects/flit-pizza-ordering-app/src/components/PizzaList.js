import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../app/page.module.css";

const pizzaList = [
  {
    id: 1,
    src: "/images/burger.jpg",
    name: "Burger Pizza",
    price: 20,
  },
  {
    id: 2,
    src: "/images/pizza-top.png",
    name: "New Pizza",
    price: 10,
  },
  {
    id: 3,
    src: "/images/pizza-bottom.png",
    name: "Greek Pizza",
    price: 40,
  },
];

const PizzaList = () => {
  return (
    <div>
      {/* Popular Dishes*/}
      <div className={`${styles.popular} row`}>
        <div className={`${styles.section_title} col-12 col-md-12`}>
          <h6>Popular Dishes</h6>
          <h4>Browse our Menu</h4>
        </div>

        {pizzaList.map((pizza) => (
          <>
            <div className={`${styles.pizza_card} col-12 col-md-4`}>
              <div key={pizza.id} className={styles.cardbody}>
                <Link href={`/Products/${pizza._id}`} passHref>
                  <Image src={pizza.src} alt="..." width="340" height="340" />
                </Link>
                <div>
                  <h5>
                    {pizza.name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;
                    <span className={styles.pizza_price}>${pizza.price}</span>
                  </h5>
                  <div className={`${styles.rating} py-3`}>
                    <FaStar color="#fbb200" />
                    <FaStar color="#fbb200" />
                    <FaStar color="#fbb200" />
                    <FaStar color="#fbb200" />
                    <FaStar color="#fbb200" />
                  </div>
                  <p>{pizza.desc}</p>
                  <Link href={`/Products/${pizza._id}`}>
                    <button className={`${styles.primary_btn} my-3`}>
                      <FaShoppingCart color="white" size={24} /> &nbsp; ORDER
                      NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
export { pizzaList };
