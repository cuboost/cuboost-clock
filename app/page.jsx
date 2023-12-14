"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { BsGear } from "react-icons/bs";
import Settings from "./components/settings/Settings";
import ContextMenu from "./components/ui/ContextMenu";

export default function Home() {
  const [time, setTime] = useState({
    hours: "--",
    minutes: "--",
    seconds: "--",
    amPm: "--",
    day: "--",
    month: "--",
    year: "--",
  });

  // Settings
  const [showSettings, setShowSettings] = useState(false);
  const [showSeconds, setShowSeconds] = useState(true);
  const [twelveHourFormat, setTwelveHourFormat] = useState(false);
  const [showAmPm, setShowAmPm] = useState(false);
  const [showDate, setShowDate] = useState(true);
  const [showSecondsTabTitle, setShowSecondsTabTitle] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState();

  useLayoutEffect(() => {
    setTime(createTimeObject(new Date()));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeObject = createTimeObject(new Date());

      setTime(timeObject);

      if (showSecondsTabTitle) {
        document.title =
          timeObject.hours +
          ":" +
          timeObject.minutes +
          ":" +
          timeObject.seconds;
        return;
      } else {
        document.title = timeObject.hours + ":" + timeObject.minutes;
        return;
      }
    }, 500);
    return () => clearInterval(interval);
  }, [setTime, showSecondsTabTitle]);

  function createTimeObject(localDate) {
    return {
      hours: localDate.getHours().toString().padStart(2, "0"),
      amPmHours:
        localDate.getHours() > 12
          ? (localDate.getHours() - 12).toString()
          : localDate.getHours(),
      amPm: localDate.getHours() >= 12 ? "PM" : "AM",
      minutes: localDate.getMinutes().toString().padStart(2, "0"),
      seconds: localDate.getSeconds().toString().padStart(2, "0"),
      day: localDate.getDate().toString().padStart(2, "0"),
      month: localDate.getMonth().toString().padStart(2, "0"),
      year: localDate.getFullYear(),
    };
  }

  // TODO
  // Creating an array because Tailwind does not accept props to build class names dynamically. See here: https://tailwindcss.com/docs/content-configuration#dynamic-class-names
  const numberRotations = {
    30: "rotate-[30deg]",
    60: "rotate-[60deg]",
    90: "rotate-[90deg]",
    120: "rotate-[120deg]",
    150: "rotate-[150deg]",
    180: "rotate-[180deg]",
    210: "rotate-[210deg]",
    240: "rotate-[240deg]",
    270: "rotate-[270deg]",
    300: "rotate-[300deg]",
    330: "rotate-[330deg]",
  };

  return (
    <ContextMenu>
      <main className="flex h-full flex-col items-center justify-between md:flex-row">
        {/* Clock */}
        <div className="hidden">
          <div className=" relative h-60 w-60 select-none rounded-full bg-slate-50/90">
            {/* Hour Hand */}
            <div
              className={`absolute ${numberRotations[30]} bottom-1/2 left-1/2 z-10 h-1/2 w-2 origin-bottom -translate-x-1/2 rounded-xl bg-black`}
            />
            {[...Array(12)].map((e, i) => (
              <div
                key={i}
                className={`${
                  numberRotations[i * 30 + 30]
                } absolute h-full w-full text-center text-black`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-full flex-1 flex-col items-center justify-center">
          {/* Time */}
          <h1 className=" select-none text-6xl tracking-wider sm:text-7xl md:text-8xl xl:text-9xl">
            {twelveHourFormat ? time.amPmHours : time.hours}:{time.minutes}
            {showSeconds === true && ":" + time.seconds}
            {showAmPm && " " + time.amPm}
          </h1>
          {showDate && (
            <h1>
              {time.day}/{time.month}/{time.year}
            </h1>
          )}
        </div>

        {showSettings && (
          <Settings
            showSecondsState={setShowSeconds}
            showAmPmState={setShowAmPm}
            twelveHourFormat={setTwelveHourFormat}
            twelveHourFormatState={twelveHourFormat}
            showDate={setShowDate}
            showSecondsTabTitle={setShowSecondsTabTitle}
            setBackgroundImage={setBackgroundImage}
          />
        )}

        {/* Settings */}
        <BsGear
          className="absolute bottom-6 right-6 cursor-pointer text-xl transition hover:scale-110 active:scale-90 sm:text-2xl xl:bottom-8 xl:right-8 xl:text-3xl"
          onClick={() => setShowSettings(!showSettings)}
        />
      </main>
    </ContextMenu>
  );
}
