import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirPath = path.join(process.cwd(), "content", "posts");

export function getPostFiles() {
  return fs.readdirSync(postsDirPath);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirPath, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  //extract meta data and content from .md files
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const postsData = postFiles.map((file) => {
    return getPostData(file);
  });

  const allSortedPosts = postsData.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return allSortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
}
