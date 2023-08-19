import React, { useCallback, useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

const MenuLayout = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="overflow-x-auto fixed w-full h-full inset-0 backdrop-blur-sm bg-neutral-800/70 z-[9999]">
      <div className="flex justify-end h-[100vh] overflow-x-s overflow-x-scroll ">
        <div className="w-full sm:w-[40%] md:w-[35%] sm:my-0 md:my-0 mr-[0%] sm:mr-[0%] md:mr-[0%] h-full">
          <div className={`translate scale-[1] duration-300 h-full ${showModal ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-full scale-0 opacity-0'}`}>
            <div className="overflow-x-scroll translate h-full border-0 relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-center py-2 px-6 rounded-t justify-between relative">
                <div className="text-lg font-semibold">
                  {title}
                </div>
                <button onClick={handleClose} className="z-[999]">
                  <p className="text-[20px] text-dark dark:text-light underline"><AiOutlineClose/></p>
                </button>
              </div>
              <hr />
              {/* body */}
              <div className="relative p-6 flex-auto">
                {body}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLayout;
