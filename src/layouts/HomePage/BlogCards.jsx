import React from "react";
import blogCards from "../../blogCards.json";
import BlogCard from "../../components/BlogCard";
function BlogCards() {
  return (
    <main className="flex flex-col py-20 gap-20 items-center">
      <section className="flex flex-col gap-2.5">
        <h6 className="text-sky-500 text-center">Practice Advice</h6>
        <h2 className="text-slate-800 ">Featured Posts</h2>
      </section>
      <section className="flex flex-col gap-7.5 md:flex-row md:justify-between">
        {blogCards.map((card, index) => (
          <BlogCard key={index} card={card}>
            {" "}
          </BlogCard>
        ))}
      </section>
    </main>
  );
}

export default BlogCards;
