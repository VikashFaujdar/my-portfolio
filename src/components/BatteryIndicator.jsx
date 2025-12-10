import { useEffect, useState } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";


export default function BatteryStatus() {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [charging, setCharging] = useState(false);
  const [powerSaving, setPowerSaving] = useState(false);

  useEffect(() => {
    async function loadBattery() {
      if (navigator.getBattery) {
        const battery = await navigator.getBattery();

        setBatteryLevel(Math.round(battery.level * 100));
        setCharging(battery.charging);

        battery.addEventListener("levelchange", () => {
          setBatteryLevel(Math.round(battery.level * 100));
        });

        battery.addEventListener("chargingchange", () => {
          setCharging(battery.charging);
        });
      }

      // Estimate power saving mode
      const deviceMemory = navigator.deviceMemory || 4;
      setPowerSaving(deviceMemory <= 2);
    }

    loadBattery();
  }, []);

  return (
    <div className='hidden rounded-tr-md rounded-br-md w-12 group transition-all duration-200 bg-white hover:bg-zinc-500 text-white h-5 relative  rounded-sm  md:flex items-center justify-center'>
      <h1 className='text-black group-hover:text-white transition-all duration-200 text-sm font-primary font-medium relative z-10'>{batteryLevel}%</h1>
      <BsFillLightningChargeFill className={charging == true ? 'block text-green-400' : 'hidden'} size={13}/>
      <div className="line w-2 absolute -right-[2px] rounded-tr-[2px] group-hover:bg-zinc-500 transition-all duration-200 rounded-br-[2px] h-3 bg-white"></div>
    </div>
  );
}