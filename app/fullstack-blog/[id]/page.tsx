const getSingleBlogPage = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/fullstack-blog/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const SingleBlogPage = async ({ params }: any) => {
  const id = params?.id;
  const { post } = await getSingleBlogPage(id);

  return (
    <div>
      <h1>{post.title}</h1>
      <h1>{post.description}</h1>
    </div>
  );
};

export default SingleBlogPage;
