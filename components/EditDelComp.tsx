"use client";
import React from "react";

interface EditDelCompTypes {
  id: string;
}

const EditDelComp = ({ id }: EditDelCompTypes) => {
  const deleteHandler = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/fullstack-blog/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="absolute top-1 right-1 flex gap-1 ">
      <button onClick={deleteHandler} className="text-red-500">
        D
      </button>
      <button className="">E</button>
    </div>
  );
};

export default EditDelComp;
