import React from "react";

function FeatureCard({ feature }) {
  return (
    <div>
      <main className="flex flex-col items-center gap-5 py-9 px-10">
        <img src={feature.icon} />
        <h3 className="text-slate-800">{feature.title}</h3>
        <p className="text-neutral-500">{feature.desc}</p>
      </main>
    </div>
  );
}

export default FeatureCard;
