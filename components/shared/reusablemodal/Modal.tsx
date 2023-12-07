import React from "react";

type ModalProps = {
  action: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  open?: boolean;
};
export default function Modal({ action, children, open }: ModalProps) {
  return (
    <div
      className={` modal-background h-full max-h-screen w-full bg-[#00000080] bg-opacity-40 left-0 top-0 justify-center items-center ${
        open ? "flex" : "hidden"
      } flex-col  text-center absolute z-[1000]`}
      onClick={() => action(false)}
    >
      <div className=" flex flex-col justify-end">
        <div
          className="modal-container bg-white p-8 rounded-2xl  scrollbar-hidden xl:h-auto max-h-[calc(100vh-100px)] "
          style={{ height: "" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content md:w-[768px] md:h-[495px] w-auto h-auto gap-5 bg-[white] items-center rounded-xl">
            <div
              onClick={() => action(false)}
              className=" flex w-auto justify-end hover:cursor-pointer pb-5"
            >
              <img
                src="cancel.svg"
                alt="cancel button"
                className=" h-10 w-10 pr-4"
              />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
