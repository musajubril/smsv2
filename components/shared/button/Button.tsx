import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva("rounded-lg font-semibold flex gap-2 h-full w-full  justify-center items-center", {
    variants: {
      intent: {
        primary: "bg-[#0065C2]  text-white hover:bg-[#2999FF]  border-[#0065C2] disabled:bg-[#D4D4D4]",
        secondary: "bg-white border border-[#0065C2] text-[#0065C2] hover:bg-[#F5FAFF] disabled:border-[#8FC9FF] disabled:text-[#8FC9FF]  disabled:hover:bg-white",
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
  }
  export default function Button({ intent,size, text,disabled, ...props }: ButtonProps) {
 
    return (
      <button className={`${buttonStyles({ intent, size })}`} {...props}  disabled={disabled}>
        {text}
      </button>
    );
  }