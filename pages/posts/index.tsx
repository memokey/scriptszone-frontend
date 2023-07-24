import React from "react";
import Layout from "../../components/Layout";
import Post from "../../components/Posts/Post";
import { POSTS } from "../../data/posts";
import PostView from "../../components/Posts/PostView";

const Posts = () => {
  return (
    <Layout>
      <div className="mx-[132px] grid grid-cols-12 gap-[36px]">
        <div className="col-span-7">
          {POSTS.map((post, index) => (
            <Post
              key={index}
              {...post} 
            />
          ))}
        </div>
        <div className="col-span-5">
          {[0,1,2,3,4].map((count) => (
            <PostView key={count}/>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Posts;