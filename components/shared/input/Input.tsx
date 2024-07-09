import { cva, VariantProps } from "class-variance-authority";

const inputStyles = cva("rounded-md font-medium h-full w-full border border-gray-500 focus:outline-teal-200 hover:border-teal-200 disabled:bg-gray-100 ", {
    variants: {
      size: {
        small: "py-1 px-6 text-sm",
        large: "py-2 px-6 text-base",
      },
      defaultVariants: {
        size: "base"
      },
    },
  });
  interface InputProps extends VariantProps<typeof inputStyles> {
    text: string;
    name: string;
    error:boolean|null;
    success:boolean|null;
    disabled:boolean;
    change: React.ChangeEventHandler<HTMLInputElement> | undefined | null;
    blur: React.FocusEventHandler<HTMLInputElement> | undefined | null;
    value: any;
    className: string;
    type: string | 'text';
    

  }
  export default function Input({ size, text,name,disabled,error, value,success,change,blur,className,type, ...props }: InputProps) {
 
    return (
      <input className={`${inputStyles({ size })} ${error ? "border-red-500" : null} ${success ? "border-green-500" : null} ${className} `}
       {...props}  disabled={disabled} placeholder={text} onChange={change} name={name} value={value} type={type} onBlur={blur}/>   

      
    );
  }