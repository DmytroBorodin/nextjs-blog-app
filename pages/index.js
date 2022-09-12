import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home/hero/hero";
import FeaturedPosts from "../components/home/featured-posts/featured-posts";
import { getFeaturedPosts } from "../lib/post-utils";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dmytro`s Dev Blog</title>
        <meta name="desctiption" content="This is my development blog" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
