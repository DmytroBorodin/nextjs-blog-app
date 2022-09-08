import { Fragment } from "react";
import Hero from "../components/home/hero/hero";
import FeaturedPosts from "../components/home/featured-posts/featured-posts";

function HomePage(props) {
  const DUMMY_POSTS = [
    {
      title: "Getting started with NextJS",
      slug: "getting-started-nextjs",
      image: "getting-started-nextjs.png",
      date: "",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ut, quos minus nam at delectus. Magni eum, illo excepturi dicta voluptas inventore commodi, perferendis eaque aperiam temporibus autem dolore ab?",
    },
    {
      title: "Getting started with NextJS 2",
      slug: "getting-started-nextjs-2",
      image: "getting-started-nextjs.png",
      date: "",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ut, quos minus nam at delectus. Magni eum, illo excepturi dicta voluptas inventore commodi, perferendis eaque aperiam temporibus autem dolore ab?",
    },
    {
      title: "Getting started with NextJS 3",
      slug: "getting-started-nextjs-3",
      image: "getting-started-nextjs.png",
      date: "",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ut, quos minus nam at delectus. Magni eum, illo excepturi dicta voluptas inventore commodi, perferendis eaque aperiam temporibus autem dolore ab?",
    },
    {
      title: "Getting started with NextJS 4",
      slug: "getting-started-nextjs-4",
      image: "getting-started-nextjs.png",
      date: "",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ut, quos minus nam at delectus. Magni eum, illo excepturi dicta voluptas inventore commodi, perferendis eaque aperiam temporibus autem dolore ab?",
    },
  ];

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
