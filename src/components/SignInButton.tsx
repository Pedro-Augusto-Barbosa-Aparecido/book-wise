import { HTMLAttributes, ReactNode } from "react";

type ButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, "className"> & {
  title: string;
  icon: ReactNode;
};

export function SignInButton({
  title,
  icon: ButtonIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className="flex w-full items-center gap-5 rounded-sm bg-gray-600 px-6 py-5 shadow-md transition-all duration-500 hover:brightness-125"
    >
      {ButtonIcon}
      <span className="font-default text-base font-bold leading-short text-gray-200">
        {title}
      </span>
    </button>
  );
}
