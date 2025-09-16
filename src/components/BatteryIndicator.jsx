import { h1 } from 'framer-motion/client';
import React, { useState } from 'react'

const BatteryIndicator = () => {

    const [batterlevel, setbatterlevel] = useState("")

    function updateBatteryStatus(battery) {
        const batteryLevel = (battery.level)*100;
        console.log(batteryLevel);
        setbatterlevel(batteryLevel)
    }

   navigator.getBattery().then(function (battery) {

    updateBatteryStatus(battery);

   });

  return (
    <div className='hidden rounded-tr-md rounded-br-md w-12 bg-white h-5 relative  rounded-sm  md:flex items-center justify-center'>
        <h1 className='text-black text-sm font-primary font-medium relative z-10'>{batterlevel}%</h1>
    <div className="line w-1 absolute -right-[3px] rounded-tr-[2px] rounded-br-[2px] h-3 bg-white"></div>
    </div>
  )
}

export default BatteryIndicator