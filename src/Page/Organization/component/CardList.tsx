import AccountLeaveOrganization from "../../Account/AccountLeaveOrganization.tsx";
import { useState } from "react";

type Card = {
  id: string;
  name: string;
  role: string;
  onLeaveSuccess: () => void | Promise<void>;
};

export default function CardList(props: Card) {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div
      className="w-50 rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:cursor-pointer hover:shadow-xl"
      onClick={() => setOpen(!isOpen)}
    >
      <div>
        <img
          src="https://marketingprzykawie.pl/wp-content/uploads/2019/08/xpepe-the-frog_small.jpg.pagespeed.ic.rlfAU4UySt.jpg"
          className="pt-3"
        />
        <p className="text-lg text-center font-bold">{props.name}</p>
        <p className="text-center pb-3 text-gray-400">{props.role}</p>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`w-40 border-t border-gray-200 px-4 py-3 text-sm text-gray-600 text-center m-auto transform transition-all duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-2"
          }`}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <AccountLeaveOrganization
            organizationId={props.id}
            onLeaveSuccess={async () => {
              setOpen(false);
              await props.onLeaveSuccess();
            }}
          />
        </div>
      </div>
    </div>
  );
}
