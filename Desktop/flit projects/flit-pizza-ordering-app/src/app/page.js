import Image from "next/image";
import styles from "./page.module.css";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Strength from "@/components/Strength";
import Testimonials from "@/components/Testimonials";
import PizzaList from "@/components/PizzaList";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className={`${styles.hero} row`}>
          <div className={`${styles.hero_left} col-12 col-md-6`}>
            <h1>
              Handmade, With an Extra Pinch of <span>Love</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link href="/Products">
              <button className={`${styles.primary_btn} my-3`}>
                <FaShoppingCart color="white" size={24} /> &nbsp; ORDER NOW
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <Image
              className={styles.top_pizza}
              src="/images/pizza-top.png"
              alt=""
              width="450"
              height="450"
            />
            <div className={styles.onion}>
              <Image src="/images/onion.png" alt="" width="100" height="90" />
            </div>
            <div className={styles.yellow_banner}>
              <Image
                src="/images/pizza-bottom.png"
                alt=""
                width="200"
                height="200"
              />
            </div>
          </div>

          {/* daily fresh */}
          <div className="row">
            <div className="col-12 col-md-4">
              <Image
                src="/images/pizza-daily-fresh.png"
                alt=""
                width="400"
                height="400"
              />
            </div>
            <div className={`${styles.df_col} col-12 col-md-8`}>
              <div className={styles.daily_fresh}>
                <h5>
                  Daily fresh and <br /> always tasty
                </h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority haved
                </p>
              </div>
              <div className={styles.garlic}>
                <Image src="/images/garlic.png" alt="" width={90} height={90} />
              </div>
            </div>
          </div>

          {/* pizzalist */}
          <PizzaList />

          {/* Our strength */}
          <Strength />

          {/* client testimonials */}
          <Testimonials />
        </div>
      </div>
    </>
  );
}
