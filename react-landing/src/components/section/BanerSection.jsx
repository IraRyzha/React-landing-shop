import GradientBottom from "../GradientBottom";
import GradientTop from "../GradientTop";
import ArrowRight from "../icons/arrow-right";

const banerLinkNames = [
  "Open roles",
  "Internship program",
  "Our values",
  "Meet our leadership ",
];

const banerStatistics = [
  { name: "Offices worldwide", statistics: 12 },
  { name: "Full-time colleagues", statistics: "300+" },
  { name: "Hours per week", statistics: 40 },
  { name: "Paid time off", statistics: "Unlimited" },
];

const BanerSection = () => {
  return (
    <div className="w-5/6 h-autoisolate relative text-white">
      <img
        className="absolute h-full w-full -z-10 rounded-3xl"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt="banerImage"
      />
      <div className="p-32 flex flex-col justify-center gap-7">
        <GradientTop />
        <h2 className="text-6xl font-extrabold">Work with us</h2>
        <p className="max-w-2xl text-base font-normal">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
          perferendis voluptates ut sit a in veniam doloremque? Reprehenderit in
          quibusdam saepe deleniti architecto assumenda laborum.
        </p>
        <div className="flex gap-7">
          {banerLinkNames.map((link) => {
            return (
              <a
                key={link}
                href="#"
                className="flex items-center gap-2 font-semibold hover:scale-[1.03] ease-in-out"
              >
                <span className="">{link}</span>
                <ArrowRight />
              </a>
            );
          })}
        </div>
        <div className="flex gap-56 pt-10">
          {banerStatistics.map((item) => {
            return (
              <div
                className="flex flex-col justify-center gap-1"
                key={item.name}
              >
                <span className="text-2xl font-semibold">
                  {item.statistics}
                </span>
                <p className="text-base font-normal">{item.name}</p>
              </div>
            );
          })}
        </div>
        <GradientBottom />
      </div>
    </div>
  );
};

export default BanerSection;
