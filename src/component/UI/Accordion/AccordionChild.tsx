import type { ReactNode } from "react";

interface AccordionChildProps {
    title: string;
    children: ReactNode;
}

export default function AccordionChild({ title, children }: AccordionChildProps) {
  return (
    <div className="space-y-2 pl-4">
      <details
        className="group/members [&amp;_summary::-webkit-details-marker]:hidden"
        open={false}
      >
        <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
          <span>{title}</span>

          <svg
            className="size-4 shrink-0 transition-transform duration-300 group-open/members:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </summary>

        <div className="p-4">
          <p className="text-gray-700">{children}</p>
        </div>
      </details>
    </div>
  );
}
