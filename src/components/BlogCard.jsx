import {
  AlarmClockIcon,
  AreaChart,
  ArrowRightIcon,
  Heart,
  ShoppingCart,
  Eye,
  Download,
  Menu,
  ChartAreaIcon,
  MoveRight,
} from "lucide-react";

function BlogCard({ card }) {
  return (
    <div>
      <main className="flex flex-col gap-2.5 items-center px-6 md:hidden">
        <section>
          <div className="relative">
            <img src={card.img} />
            {card.imgTag && (
              <h6 className="absolute top-5 left-5 bg-red-500 text-white px-2.5 text-sm rounded-sm z-10">
                {card.imgTag}
              </h6>
            )}
          </div>
        </section>
        <section className="flex flex-col gap-4 px-8 pb-8">
          <nav className="flex gap-4">
            {card.tags &&
              card.tags.map((tag, index) => (
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
      <div className="hidden md:flex bg-white shadow-md overflow-hidden w-full max-w-2xl mx-auto">
        <div className="w-1/2 relative flex flex-col justify-between">
          {card.imgTag && card.imgTag !== "" && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1">
              {card.imgTag}
            </span>
          )}
          <img
            src={card.img}
            alt={card.title}
            className="object-cover w-full h-full"
          />
          <div className="flex justify-center gap-4 py-4 absolute bottom-[6%] left-[25%]">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm text-sky-500  hover:bg-sky-500 hover:text-white transition cursor-pointer">
              <Heart size={20} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm text-sky-500  hover:bg-sky-500 hover:text-white transition cursor-pointer">
              <ShoppingCart size={20} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm text-sky-500  hover:bg-sky-500 hover:text-white transition cursor-pointer">
              <Eye size={20} />
            </button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between p-6 gap-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sky-600 font-semibold text-sm">
              {card.department}
            </span>
            <span className="flex items-center gap-1 bg-slate-800 text-white rounded-full px-2 py-1 text-xs font-semibold">
              <span className="text-yellow-500  ">★</span> {card.rating}
            </span>
          </div>
          <h3 className="text-slate-800 text-lg font-bold mt-1">
            {card.title}
          </h3>
          <p className="text-neutral-500 text-sm mb-2">{card.desc}</p>
          <div className="flex items-center gap-2 text-neutral-500 text-xs mb-1">
            <h6 className="flex items-center gap-1">
              <Download />
              {card.sales} Sales
            </h6>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="line-through text-neutral-400">
              ${card.oldPrice}
            </span>
            <span className="text-emerald-700 font-bold">${card.price}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            {card.colors &&
              card.colors.map((color, i) => (
                <span
                  key={i}
                  className="w-4 h-4 rounded-full "
                  style={{ background: color }}
                ></span>
              ))}
          </div>
          <div className="flex items-center gap-4 text-neutral-500 text-sm mb-2">
            <h6 className="flex items-center gap-1 font-normal">
              <AlarmClockIcon className="text-sky-500" />
              {card.duration}
            </h6>
            <span className="flex items-center gap-1">
              <ChartAreaIcon className="text-[#E77C40]" />
              {card.lessons} Lessons
            </span>
            <span className="flex items-center gap-1">
              <ChartAreaIcon className="text-[#23856D]" />
              Progress
            </span>
          </div>
          <button className="mt-2 flex bg-white border border-sky-500 text-sky-500 font-semibold rounded-full px-6 py-2 hover:bg-sky-500 hover:text-white transition w-fit self-start cursor-pointer">
            Learn More
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
