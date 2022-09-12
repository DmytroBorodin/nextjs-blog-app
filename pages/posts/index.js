import { Fragment } from "react";
import Head from "next/head";
import AllPosts from "../../components/ posts/all-posts/all-posts";
import { getAllPosts } from "../../lib/post-utils";

function PostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>My Posts</title>
        <meta name="desctiption" content="Here you can find all my posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default PostsPage;
