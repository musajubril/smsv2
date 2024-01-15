import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva("rounded-lg font-semibold flex gap-2 h-full w-full  justify-center items-center", {
    variants: {
      intent: {
        primary: "bg-[#0065C2]  text-white-100 hover:bg-[#2999FF]  border-[#0065C2] disabled:bg-[#D4D4D4]",
        secondary: "bg-white-100 border border-[#0065C2] text-[#0065C2] hover:bg-[#F5FAFF] disabled:border-[#8FC9FF] disabled:text-[#8FC9FF]  disabled:hover:bg-white-100",
      },
      size: {
        small: "py-2 px-6 text-sm",
        base: "py-3 px-6 text-base",
      },
      defaultVariants: {
        intent: "primary",
        size: "base"
      },
    },
  });
  interface ButtonProps extends VariantProps<typeof buttonStyles> {
    text: string;
    disabled:boolean
    onClick:any
  }
  export default function Button({ intent,size, text,disabled,onClick, ...props }: ButtonProps) {
 
    return (
      <button className={`${buttonStyles({ intent, size })}`} {...props} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    );
  }