import React from "react";

type ModalProps = {
  action: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  open?: boolean;
};

const Modal: React.FC<ModalProps> = ({ action, children, open }) => {
  return (
    <div
      className={`modal-background h-full max-h-screen w-full bg-[#00000080] bg-opacity-40 left-0 top-0 justify-center items-center ${
        open ? "flex" : "hidden"
      } flex-col text-center absolute z-[1000]`}
      onClick={() => action(false)}
    >
      <div className="flex flex-col justify-end">
        <div
          className={`bg-white-100 rounded-2xl xl:h-auto max-h-[calc(100vh-100px)] relative ${
            open ? "overflow-auto" : "overflow-hidden"
          } w-full`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="gap-5 bg-[white] items-center rounded-xl">
            <div
              onClick={() => action(false)}
              className="flex justify-end hover:cursor-pointer absolute top-4 right-4"
            >
              <img src="cancel.svg" alt="cancel button" className="h-8 w-8 pb-[8px]" />
            </div>
            <div className="p-12">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
