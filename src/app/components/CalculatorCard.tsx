interface Props {
  title: string;
  color?: string;
  circleColor?: string;
  number: number | string;
  textColor?: string;
}
export function CalculatorCard({
  circleColor,
  color,
  number,
  textColor,
  title,
}: Props) {
  return (
    <div
      className={`relative col-span-1 row-span-1 flex overflow-hidden rounded-lg ${color ? color : "bg-[#727272]"}`}
    >
      <div
        className={`absolute -right-8 -top-8 z-10 hidden h-20 w-20 rounded-full border-8 lg:flex ${circleColor ? "" : "border-[#DC2626]"} `}
      />
      <div
        className={`absolute -bottom-4 -right-4 z-10 flex h-12 w-12 rounded-full border-8 lg:-bottom-8 lg:-right-8 lg:hidden lg:h-20 lg:w-20 ${circleColor ? "" : "border-[#DC2626]"} `}
      />
      <div className="z-20 flex h-full w-full flex-col p-1 py-2 lg:p-4 lg:py-4">
        <h3
          className={`text-md max-w-[60%] font-semibold ${textColor ? textColor : "text-white"}`}
        >
          {title}
        </h3>
        <p
          className={`max-w-[60%] text-lg font-semibold ${textColor ? textColor : "text-white"}`}
        >
          {number}
        </p>
      </div>
    </div>
  );
}
