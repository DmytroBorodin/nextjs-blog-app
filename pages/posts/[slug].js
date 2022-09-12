import { Fragment } from "react";
import Head from "next/head";
import PostContent from "../../components/ posts/post-details/post-content/post-content";
import { getPostData, getPostFiles } from "../../lib/post-utils";

function PostDetailsPage(props) {
  return (
    <Fragment>
      <Head>
        {/* <title>{props.post.title}</title> */}
        {/* <meta name="desctiption" content={props.post.excerpt} /> */}
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFiles = getPostFiles();
  const postSlugs = postFiles.map((file) => file.replace(/\.md$/, ""));

  return {
    paths: postSlugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}

export default PostDetailsPage;
