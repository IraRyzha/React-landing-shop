import BanerSection from "../section/BanerSection";
import BoostSection from "../section/BoostSection";
import ArrowRight from "../icons/arrow-right";
import PricingSection from "../section/PriceSection";
import ProductSection from "../section/ProductSection";
import UiButton from "../uikit/UiButton";

const MainPage = () => {
  return (
    <main className="w-full h-auto flex flex-col justify-center items-center gap-52">
      <div className="w-1/2 px-10 mt-48 flex flex-col justify-center gap-6 items-center tracking-tight">
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
          <UiButton color="violet">Get started</UiButton>
          <UiButton color="white">
            <span className="mr-1">Learn more</span>
            <ArrowRight />
          </UiButton>
        </div>
      </div>
      <BanerSection />
      <ProductSection />
      <PricingSection />
      <BoostSection />
    </main>
  );
};

export default MainPage;
