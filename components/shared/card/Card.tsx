import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { cva, VariantProps } from "class-variance-authority";


const inputStyles = cva("  text-lg md:text-2xl rounded-full flex justify-center items-center p-1 ", {
    variants: {
      intent: {
        student: "bg-[#EBF5FF] text-[#0065C2] ",
        staff: "bg-[#EBFFFD] text-[#009688]",
        teacher: " bg-[#F5EBFF] text-[#942DFB]",
      },
      defaultVariants: {
        intent: "student"
      },
    },
  });

  interface InputProps extends VariantProps<typeof inputStyles> {
    text: string;
    number: number;
    }

export default function Card({ intent, text, number }: InputProps) {
  return (
    <div>
      <div className=" bg-white-100 text-center  p-1 shadow  cursor-pointer border border-[#EDEDED] rounded-lg flex md:gap-4 gap-1  items-center   md:pl-5 text-xs md:text-lg">
        <div className={`${inputStyles({ intent })}`}>
            <RiGraduationCapLine />
        </div>
        <div>
          <div className=" font-medium text-[10px] md:text-base text-[#BABABA]">
            {text}
          </div>
          <div className=" font-semibold text-xl md:text-4xl "> {number}</div>
        </div>
      </div>
    </div>
  );
}

