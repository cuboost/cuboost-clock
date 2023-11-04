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
        "bg-gray-blue relative flex h-[2rem] w-[3.4rem] cursor-pointer flex-col justify-center rounded-full outline-none focus-visible:scale-110 data-[state=checked]:bg-primary-blue"
      }
      onCheckedChange={onCheckedChange}
      checked={checked}
      {...props}
    >
      <SwitchUI.Thumb className=" mx-[0.5rem] block h-[1.2rem] w-[1.2rem] rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[1.2rem]" />
    </SwitchUI.Root>
  );
}
