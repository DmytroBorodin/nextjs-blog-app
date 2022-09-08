import React from "react";
import PostItem from "../post-item/post-item";

import classes from "./posts-grid.module.css";

function PostsGrid(props) {
  const { posts } = props;
  const postItems = posts.map((post) => (
    <PostItem key={post.slug} post={post} />
  ));
  return <ul className={classes.grid}>{postItems}</ul>;
}

export default PostsGrid;
