import Image from "next/image";
import classes from "./hero.module.css";

function Hero(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/profile.jpg"}
          alt={"Dmytro`s image"}
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I am Dmytro</h1>
      <p>This my personal blog about self growing and development</p>
    </section>
  );
}

export default Hero;
