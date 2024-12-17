import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStop, faPause } from '@fortawesome/free-solid-svg-icons';


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
            <div className=" flex flex-col rounded-r-xl  justify-center shadow-2xl shadow-orange-400 rounded-3xl bg-black items-center w-full flex-2">
                <h4 className="p-3 text-xl text-center font-custom">{time}</h4>
            </div>
            <div className=" flex-col  p-1  gap-1 rounded-l-xl justify-center shadow-2xl shadow-orange-400 rounded-3xl w-full bg-[#ffffff1c] border-2 items-center flex-4">

                <div className="flex text-center justify-center p-2">
                <img  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Cloud%20with%20Rain.png" alt="Cloud with Rain" width="35" height="35" />
                </div>
                <div className="flex-col m-2 justify-center items-center">
    
                    <div className="gap-7 bg-orange-400 rounded-full flex p-3 justify-center">
                        <button className="   flex justify-center items-center text-black hover:text-white rounded-full">  <FontAwesomeIcon icon={faStop} /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};
