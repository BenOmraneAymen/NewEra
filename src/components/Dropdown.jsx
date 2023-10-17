import { Dropdown } from "flowbite-react";

export default function DefaultDropdown({ className }) {
  return (
    <div    className={className}>
      <Dropdown
        arrowIcon={false}
        label={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 18L20 18"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        }
        className={"bg-slate-100 rounded-xl "}
      >
        <Dropdown.Item className="px-4 py-2 hover:bg-slate-200">
          <a href="#introduction">Our Company</a>
        </Dropdown.Item>
        <Dropdown.Item className="px-4 py-2 rounded-t-xl hover:bg-slate-200">
          <a href="#services">Services</a>
        </Dropdown.Item>
        <Dropdown.Item className="px-4 py-2 hover:bg-slate-200">
          <a href="#benefits">Why use solar Energy</a>
        </Dropdown.Item>
        <Dropdown.Item className="px-4 py-2 rounded-b-xl hover:bg-slate-200">
          <a href="#staff">Staff</a>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
