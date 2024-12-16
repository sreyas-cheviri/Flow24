import { useState, useEffect } from "react";

export const Time = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        function updatetimer() {
            const now = new Date();
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const amPm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;  
            hours = String(hours).padStart(2, '0');
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const dayOfWeek = daysOfWeek[now.getDay()]; 
            const newTime = `${hours}:${minutes}:${seconds} ${amPm} ${dayOfWeek}`;
            setTime(newTime);
           
        }

        const intervalId = setInterval(updatetimer, 1000); // Save the interval ID the setinterval internally creates
        updatetimer(); 

        return () => clearInterval(intervalId); 
    }, []); 

    return (
        <div className="input-container flex flex-row gap-1 font-medium text-white max-w-[270px] w-[270px] mx-auto rounded-3xl justify-center">
            <div className=" flex flex-col rounded-r-xl justify-center shadow-2xl shadow-orange-900 rounded-3xl bg-black items-center w-full flex-2">
                <h4 className="px-3 text-xl font-custom">{time}</h4>
            </div>
            <div className=" flex flex-col py-8  rounded-l-xl justify-center shadow-2xl shadow-orange-900 rounded-3xl w-full bg-black items-center flex-4">
                <h2>Coming soon...</h2>
            </div>
        </div>
    );
};
