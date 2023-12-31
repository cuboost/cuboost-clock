import * as SwitchUI from "@radix-ui/react-switch";

export default function Switch({
  onCheckedChange,
  checked,
  className,
  ...props
}) {
  return (
    <SwitchUI.Root
      className={
        "group relative flex h-[2rem] w-[3.4rem] cursor-pointer flex-col justify-center rounded-full bg-gray-blue outline-none duration-200 focus-visible:scale-110 active:scale-95 data-[state=checked]:bg-primary-blue"
      }
      onCheckedChange={onCheckedChange}
      checked={checked}
      {...props}
    >
      <SwitchUI.Thumb className=" mx-[0.5rem] block h-[1.2rem] w-[1.2rem] rounded-full bg-white transition-transform duration-100 will-change-transform group-hover:scale-105 group-active:scale-95 data-[state=checked]:translate-x-[1.2rem]" />
    </SwitchUI.Root>
  );
}
