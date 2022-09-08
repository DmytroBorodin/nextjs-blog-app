import PostHeader from "../post-header/post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  title: "Getting started with NextJS",
  slug: "getting-started-nextjs",
  image: "getting-started-nextjs.png",
  date: "",
  excerpt:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ut, quos minus nam at delectus. Magni eum, illo excepturi dicta voluptas inventore commodi, perferendis eaque aperiam temporibus autem dolore ab?",
  content: "# This is the first post",
};

const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

function PostContent(props) {
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
    </article>
  );
}

export default PostContent;
