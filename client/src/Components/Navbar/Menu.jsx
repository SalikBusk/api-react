import React from "react";
import useMenu from "../../Hooks/useMenu";
import MenuLayout from "./MenuLayout";

const Menu = () => {
    const menu = useMenu();

    const BodyContent = (
      <div>
        <p>This is the content of the modal.</p>
      </div>
    )
  return (
    <div>
      <MenuLayout
        isOpen={menu.isOpen}
        onClose={menu.onClose}
        onSubmit={() => {}}
        title="Menu"
        body={BodyContent}
        actionLabel="Submit"
      />
    </div>
  );
};

export default Menu;
