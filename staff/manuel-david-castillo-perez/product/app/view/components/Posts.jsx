import { useEffect, useState } from "react";

import { logic } from "../../logic";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      const posts = logic.getPosts();

      setPosts(posts);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <div className="pt-32">
      {posts.map((post) => {
        return (
          <article className="w-100 mb-8" key={post.id}>
            <h3 className="text-3xl font-semibold">{post.author}</h3>
            <img className="mx-auto" src={post.image} alt="" />
            <p className="text-lg">{post.text}</p>
            <time className="text-lg">{post.date}</time>
          </article>
        );
      })}
    </div>
  );
}
