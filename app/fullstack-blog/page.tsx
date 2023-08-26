import AddComp from "@/components/AddComp";
import EditDelComp from "@/components/editDelComp";
import Link from "next/link";
import React from "react";

interface postTypes {
  id: string;
  title: string;
  description: string;
  date: string;
}

const getFullStackBlog = async () => {
  const res = await fetch("http://localhost:3000/api/fullstack-blog", {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();
  return data;
};

const Home = async () => {
  const data = await getFullStackBlog();

  return (
    <div className="my-8 p-8">
      <h1 className="text-lg font-bold flex justify-center mb-8">
        Fullstack-blog Home
      </h1>
      <AddComp />
      <div className=" flex justify-center items-center gap-4 ">
        {data.posts.map((each: postTypes, idx: number) => {
          return (
            <div
              key={idx}
              className="relative w-[10rem] h-[10rem] shadow flex justify-center items-end bg-slate-800 rounded-md hover:bg-slate-700 transition-all "
            >
              <EditDelComp id={each.id} />
              <Link
                href={`/fullstack-blog/${each.id}`}
                className="w-full h-[80%] flex justify-center items-center "
              >
                {each.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
