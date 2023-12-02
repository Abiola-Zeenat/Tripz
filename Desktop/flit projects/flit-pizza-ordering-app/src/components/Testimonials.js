import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";

const clients = [
  {
    id: 1,
    src: "/images/client-1.jpg",
  },
  {
    id: 2,
    src: "/images/client-2.jpg",
  },
  {
    id: 3,
    src: "/images/client-3.jpg",
  },
  {
    id: 4,
    src: "/images/client-4.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="row">
      <div className={`${styles.section_title} col-12 col-md-12 mt-4`}>
        <Image src="/images/leaf.png" alt="..." width={100} height={100} />
        <h6>Customer Feedback</h6>
        <h4>Client Testimonials</h4>
      </div>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`${styles.testimonials} col-12 col-md-3 text-center`}
        >
          <div className={styles.clients}>
            <Image src={client.src} alt="..." width={100} height={100} />
            <div className="text-center">
              <h5 className="my-3">Takar Bowa</h5>
              <p>
                Lorem ipsum is simply dummy text of the print book. it has
                survived not only five centuries, but also the leap
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
