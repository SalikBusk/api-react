import React from "react";
import { AiOutlineMenu} from "react-icons/ai";
import useMenu from "../../Hooks/useMenu";

const UserMenu = () => {
  const menuModal = useMenu();

   return (
    <div onClick={menuModal.onOpen} className="hover:bg-neutral-100 rounded-full transition border-neutral-200 cursor-pointer">
      <div className="flex flex-row items-center gap-1">
        <div className="hidden md:block text-sm font-semibold py-3 px-2">
          Menu
        </div>
        <div
          className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-2"
        >
          <AiOutlineMenu size={20}/>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
