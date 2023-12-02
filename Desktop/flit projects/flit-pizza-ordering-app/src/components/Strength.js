import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";
const icons = [
  {
    id: 1,
    photoName: "/images/all-kinds-of-foods.png",
  },
  {
    id: 2,
    photoName: "/images/fresh-foods.png",
  },
  {
    id: 3,
    photoName: "/images/best-taste.png",
  },
  {
    id: 4,
    photoName: "/images/on-time-delivery.png",
  },
];

export default function Strength() {
  return (
    <div className={`${styles.strength} row`}>
      <div className={`${styles.section_title} col-12 col-md-6`}>
        <h6>Our Strength </h6>
        <h4>Why We Are The Best?</h4>
      </div>
      <div className={`${styles.strength_pizza} col-12 col-md-6`}>
        <Image
          src="/images/strength-pizza.png"
          alt=""
          width={250}
          height={200}
        />
      </div>
      {icons.map((icon) => (
        <div
          key={icon.id}
          className={`${styles.foods} col-12 col-md-3 col-sm-6`}
        >
          <Image src={icon.photoName} alt="" width={34} height={40} />
          <h4>All Kinds of Foods</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
        </div>
      ))}
    </div>
  );
}
