type Post = {
  id: string;
  title: string;
  desc: string;
  date: Date;
};

let postList: Post[] = [];

//handlers
export const getPosts = () => postList;
export const getPost = (id: string) => {
  const foundPost = postList.find((post) => post.id === id);
  if (foundPost) {
    return foundPost;
  } 
};

export const createPost = (post: Post) => {
  postList.push(post);
};

export const updatePost = (id: string, title: string, desc: string) => {
  const foundPost = postList.find((post) => post.id === id);
  if (foundPost) {
    foundPost.title = title;
    foundPost.desc = desc;
    return foundPost
  } else {
    throw new Error("Not found");
  }
};

export const deletePost = (id: string) => {
  const filteredPosts = postList.filter((post) => post.id !== id);
  postList = filteredPosts
};
