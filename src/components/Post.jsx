import React from "react";
import { post } from "../constants/post";

const Post = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {post.map((el, index) => (
        <section key={index} className="w-[50vw] flex my-10">
          <a className="w-full md:h-96" href="/posts">

            <img src={el.img} alt="" className="object-cover w-full md:h-96" />
          </a>
          <div className="flex flex-col mx-5">
            <h1 className="  font-bold text-3xl">
              <a href="/posts">{el.title}</a>
            </h1>
            <span className="my-5">{el.date}</span>
            <p className="w-96 mt-20">{el.desc}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Post;
