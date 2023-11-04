import Switch from "../ui/Switch";
import SettingsOption from "./SettingsOption";

export default function Settings({
  showSecondsState,
  showAmPmState,
  twelveHourFormat,
  twelveHourFormatState,
  showDate,
  showSecondsTabTitle,
}) {
  return (
    <div className="m-5 w-full flex-1 overflow-x-hidden overflow-y-scroll rounded-2xl bg-slate-100/40 px-10 py-5 backdrop-blur-xl md:min-h-full md:w-1/3 md:flex-none lg:w-4/12">
      <h2 className=" pb-8 text-center text-white">Settings</h2>

      <h3>Time</h3>
      <SettingsOption>
        <label htmlFor="show-seconds">Seconds</label>

        <Switch
          onCheckedChange={showSecondsState}
          defaultChecked
          id="show-seconds"
        />
      </SettingsOption>

      <SettingsOption>
        <label htmlFor="twelve-hour-format">12 Hours</label>

        <Switch onCheckedChange={twelveHourFormat} id="twelve-hour-format" />
      </SettingsOption>

      {twelveHourFormatState && (
        <SettingsOption>
          <label htmlFor="show-am-pm">Show AM/PM</label>

          <Switch onCheckedChange={showAmPmState} id="show-am-pm" />
        </SettingsOption>
      )}

      <h3>Date</h3>
      <SettingsOption>
        <label htmlFor="show-date">Date</label>

        <Switch onCheckedChange={showDate} defaultChecked id="show-date" />
      </SettingsOption>

      <h3>Tab</h3>
      <SettingsOption>
        <label htmlFor="show-seconds-tab-title">Seconds</label>

        <Switch
          onCheckedChange={showSecondsTabTitle}
          id="show-seconds-tab-title"
        />
      </SettingsOption>
    </div>
  );
}
