import { AlarmClockIcon, AreaChart, ArrowRightIcon } from "lucide-react";

function BlogCard({ card }) {
  return (
    <div>
      <main className="flex flex-col gap-2.5 items-center px-6">
        <section>
          <div className="relative">
            <img src={card.img} />
            {card.imgTag && (
              <h6 className="absolute top-5 left-5 bg-red-500 text-white px-2.5 text-sm rounded-sm z-10">
                NEW
              </h6>
            )}
          </div>
        </section>
        <section className="flex flex-col gap-4 px-8 pb-8">
          <nav className="flex gap-4">
            {card.tags.map((tag, index) => (
              <a
                href="#"
                key={index}
                className="hover:text-sky-500 text-neutral-500 text-sm"
              >
                {tag}
              </a>
            ))}
          </nav>
          <h4 className="whitespace-pre-line text-slate-800">{card.title}</h4>
          <p className="text-neutral-500">{card.desc}</p>
          <div className="flex justify-between">
            <div className="flex items-center">
              <AlarmClockIcon className="text-sky-500 inline-block mr-1.25" />
              <p className="text-neutral-500">{card.date}</p>
            </div>
            <div className="flex items-center">
              <AreaChart className="text-emerald-700 inline-block mr-1.25" />
              <p className="text-neutral-500">{card.comments}</p>
            </div>
          </div>
          <a href="#">
            <h6 className="text-neutral-500 hover:underline">
              Learn More{" "}
              <ArrowRightIcon className="text-sky-500 inline-block ml-1.25" />
            </h6>
          </a>
        </section>
      </main>
    </div>
  );
}

export default BlogCard;
