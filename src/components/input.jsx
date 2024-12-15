import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';

export const Inputcompo = ({ onStart }) => {
    const inputRefHrs = useRef(null);

    const [sec, setSec] = useState('');
    const [min, setmin] = useState('');
    const [hrs, sethrs] = useState('');
    const [clickc, setclickc] = useState(false);

    useEffect(() => {
        if (clickc) {

            inputRefHrs.current.focus();
        }
    }, [clickc]);


    const handlecompoclick = () => {
        setclickc(true)
    }

    const checkInput = () => {

        if (
            sec === '' && min === '' && hrs === '' ||
            isNaN(sec) || isNaN(min) || isNaN(hrs) ||
            sec < 0 || min < 0 || hrs < 0
        ) {
            if (sec === '' && min === '' && hrs === '') {
                inputRefHrs.current.focus();
                alert("Enter some values")
            }
            else if (isNaN(sec) || sec < 0) {
                setSec('')
                setmin('')
                sethrs('')
                alert("Invalid input")
                inputRefHrs.current.focus();
            } else if (isNaN(min) || min < 0) {
                setSec('')
                setmin('')
                sethrs('')
                alert("Invalid input")
                inputRefHrs.current.focus();
            } else {
                setSec('')
                setmin('')
                sethrs('')
                alert("Invalid input")
                inputRefHrs.current.focus();
            }
        } else {
            onStart();
        }
    };


    return (
        <div onClick={handlecompoclick} className="input-container flex flex-col font-medium bg-black text-white p-2 shadow-2xl shadow-gray-500 mx-auto rounded-3xl justify-center">
            <div className="input-boxs flex flex-row p-10 justify-center items-center max-w-64">
                <input
                    ref={inputRefHrs}
                    value={hrs}
                    onChange={(e) => sethrs(e.target.value)}
                    className="hrs text-4xl p-2 max-w-14 flex-1 bg-transparent border-none focus:outline-none placeholder:text-gray-500 focus:placeholder:text-white"
                    placeholder="00"
                />
                <span className="text-gray-400">:</span>
                <input

                    value={min}
                    onChange={(e) => setmin(e.target.value)}
                    className="min text-4xl p-2 flex-1 max-w-14 bg-transparent border-none focus:outline-none placeholder:text-gray-500 focus:placeholder:text-white"
                    placeholder="00"
                />
                <span className="text-gray-400">:</span>
                <input

                    value={sec}
                    onChange={(e) => setSec(e.target.value)}
                    className="sec text-4xl p-2 flex-1 max-w-14 bg-transparent border-none focus:outline-none placeholder:text-gray-500 focus:placeholder:text-white"
                    placeholder="00"
                />
            </div>
            <button
                className="start-btn p-3 m-0 text-lg rounded-2xl bg-white text-black hover:bg-gray-300"
                onClick={checkInput}
            >
                <FontAwesomeIcon icon={faPlay} />
            </button>
        </div>
    );
};
