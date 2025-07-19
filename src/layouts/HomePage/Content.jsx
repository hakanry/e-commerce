import React from "react";
import content1 from "../../assets/content1.png";
import content2 from "../../assets/content2.png";
function Content() {
  return (
    <div>
      <main className="flex flex-col gap-12.25 items-center">
        <section className="flex flex-col gap-4 text-start px-11.5 pb-12.5">
          <h5 className="text-sky-500">Featured Products</h5>
          <h2 className="text-slate-800">We love what we do</h2>
          <p className="text-neutral-500">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics <br />
            <br />
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </section>
        <section className="flex gap-3 px-5 pb-7.5">
          <img src={content1} />
          <img src={content2} />
        </section>
      </main>
    </div>
  );
}

export default Content;
