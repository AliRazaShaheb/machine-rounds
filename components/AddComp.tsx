"use client";

import { ChangeEvent, useState } from "react";
const blogInitialState = {
  blog_title: "",
  blog_body: "",
};
export default function AddComp() {
  const [blogInput, set_blogInput] = useState(blogInitialState);
  const blogOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    set_blogInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const blogOnChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    set_blogInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddBlog = async () => {
    const payload = {
      title: blogInput.blog_title,
      description: blogInput.blog_body,
    };
    const res = await fetch("http://localhost:3000/api/fullstack-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
    console.log(res);
    set_blogInput(blogInitialState);
  };

  return (
    <div className="flex flex-col gap-4 ">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Blog Title</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={blogOnChange}
          name="blog_title"
          value={blogInput.blog_title}
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Blog Body</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Blog Body"
          onChange={blogOnChangeTextArea}
          name="blog_body"
          value={blogInput.blog_body}
        />
      </div>
      <div className="max-w-xs">
        <button className="btn btn-accent" onClick={handleAddBlog}>
          Add Blog
        </button>
      </div>
    </div>
  );
}
