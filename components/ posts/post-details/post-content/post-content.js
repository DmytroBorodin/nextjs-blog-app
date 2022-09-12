import PostHeader from "../post-header/post-header";
// import dynamic from "next/dynamic";
import classes from "./post-content.module.css";
// const ReactMarkdown = dynamic(() => import("react-markdown"));

function PostContent(props) {
  console.log(props);
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <div>{post.content}</div>
      {/* <ReactMarkdown children={post.content} /> */}
    </article>
  );
}

export default PostContent;
