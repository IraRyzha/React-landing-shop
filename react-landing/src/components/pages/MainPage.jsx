import ArrowRight from "../icons/arrow-right";

const MainPage = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 px-10 mt-16 flex flex-col justify-center gap-6 items-center tracking-tight">
        <div className="border-2 mb-3 px-4 py-1 rounded-3xl flex justify-center sm:flex-row flex-col gap-1 items-center">
          <span className="text-sm font-normal text-center text-gray-600">
            Announcing our next round of funding.
          </span>
          <a
            href="#"
            className="w-auto flex-1 text-main-violet flex justify-center items-center gap-1"
          >
            <span className="text-sm font-semibold block">Read more</span>
            <ArrowRight />
          </a>
        </div>
        <h1 className="text-6xl font-bold text-center">
          Data to enrich your online business
        </h1>
        <p className="text-base font-medium text-center text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
          perferendis voluptas sed! Quam, quasi omnis quod sequi dicta assumenda
          aliquid aspernatur voluptatem fugiat cupiditate laudantium.
        </p>
        <div className="w-full mt-4 flex sm:flex-row flex-col justify-center gap-3 items-center">
          <button className="px-5 py-2 flex justify-center items-center rounded-lg bg-main-violet text-white font-semibold hover:main-violet-hover ease-in-out">
            Get started
          </button>
          <button className="px-5 py-2 flex justify-center items-center gap-1 rounded-lg bg-white hover:bg-gray-100 font-semibold ease-in-out">
            <span>Learn more</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
