import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export function DropDownWrapper({ children }) {
  return <Popover className="relative w-36">{children}</Popover>;
}

export function DropDownButton({ children }) {
  return <Popover.Button>{children}</Popover.Button>;
}

export function DropDownContent({ children }) {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-300"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute z-10">{children}</Popover.Panel>
    </Transition>
  );
}
