import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { cva, VariantProps } from "class-variance-authority";


const inputStyles = cva(" h-12 w-12 text-2xl rounded-full flex justify-center items-center ", {
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
      <div className="w-full h-full py-4 px-5 shadow-md  cursor-pointer border border-[#EDEDED] rounded-lg flex gap-4 justify-start items-center">
        <div className={`${inputStyles({ intent })}`}>
            <RiGraduationCapLine />
        </div>
        <div>
          <div className=" font-medium text-base text-[#BABABA]">
            {text}
          </div>
          <div className=" font-semibold text-4xl"> {number}</div>
        </div>
      </div>
    </div>
  );
}

