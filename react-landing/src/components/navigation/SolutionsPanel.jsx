import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { solutionPanelItems, solutionCallsToAction } from "../../constants";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const SolutionsPanel = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-1">
        Solution
        <ChevronDownIcon className="w-5 h-5 text-black" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-50"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-20 bg-white left-1/2 -translate-x-1/2 top-8 max-w-max w-max h-max shadow-lg rounded-lg">
          <div className="p-5 rounded-lg flex flex-col">
            {solutionPanelItems.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-3 py-2 px-3 hover:bg-gray-50 transition-all rounded group"
                >
                  <div className="h-10 w-10 flex justify-center items-center bg-gray-50 group-hover:bg-white rounded-lg">
                    <item.icon className="h-6 w-6 text-gray-700 group-hover:text-main-violet" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <a href={item.href}>{item.name}</a>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex bg-gray-50 rounded-lg">
            {solutionCallsToAction.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex-1 flex gap-2 justify-center items-center hover:bg-gray-100 py-3"
                >
                  <item.icon className="h-5 w-5 text-gray-400 text-center " />
                  <a className="text-black text-center" href={item.href}>
                    {item.name}
                  </a>
                </div>
              );
            })}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default SolutionsPanel;
