import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import React from "react";

const options = [
  { value: "light", icon: "ph:sun-duotone" },
  { value: "dark", icon: "ic:twotone-dark-mode" },
  { value: "system", icon: "ph:gear-duotone" },
];
const ThemeOptions = () => {
  const { theme, setTheme } = useTheme();
  const dropdownClass = {
    default:
      "flex w-40 items-center transition-transform duration-150 justify-start rounded-md pr-4 active:scale-95 gap-2 pl-2 cursor-pointer py-2 text-sm font-medium relative",
    hover: "bg-gray-100 dark:bg-secondary",
    active: "bg-gray-200 dark:bg-hover",
    notActive: "bg-transparent text-black dark:text-gray-300 text-gray-600",
  };
  const getIconName = (arg: string) => {
    switch (arg) {
      case "dark":
        return "ic:twotone-dark-mode";
      case "system":
        return "ph:gear-duotone";
      default:
        return "ph:sun-duotone";
    }
  };
  return (
    <div className="relative select-none">
      <Menu>
        <div>
          <Menu.Button className="block dark:hover:text-white">
            <Icon icon={`${theme && getIconName(theme)}`} fontSize={24} />
          </Menu.Button>
          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute  mt-2 rounded-lg border bg-white p-2 shadow-md dark:border-gray-600 dark:bg-primary dark:shadow-primary z-50">
              <div className="w-full">
                {options.map(({ value, icon }, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <span
                        className={`${dropdownClass.default} ${
                          active
                            ? dropdownClass.hover
                            : theme === value
                            ? dropdownClass.active
                            : dropdownClass.default
                        }`}
                        onClick={() => setTheme(value)}
                      >
                        <Icon icon={icon} fontSize={20} />
                        <span className="capitalize">{value}</span>
                      </span>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </div>
  );
};
export default ThemeOptions;
