import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";

export const Inputcompo = ({ onStart, handleinput }) => {
  const inputRefHrs = useRef(null);
  const inputRefMin = useRef(null);
  const inputRefSec = useRef(null);
  const [sec, setSec] = useState("");
  const [min, setmin] = useState("");
  const [hrs, sethrs] = useState("");
  const [clickc, setclickc] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (clickc) {
      inputRefHrs.current.focus();
    }
  }, [clickc]);

  const handlecompoclick = () => {
    setclickc(true);
  };

  const checkInput = () => {
    if (
      (sec === "" && min === "" && hrs === "") ||
      isNaN(sec) ||
      isNaN(min) ||
      isNaN(hrs) ||
      sec < 0 ||
      min < 0 ||
      hrs < 0
    ) {
      if (sec === "" && min === "" && hrs === "") {
        inputRefHrs.current.focus();
        setError("Enter values");
      } else if (isNaN(sec) || sec < 0) {
        setSec("");
        setmin("");
        sethrs("");
        setError("Invalid input");
        inputRefHrs.current.focus();
      } else if (isNaN(min) || min < 0) {
        setSec("");
        setmin("");
        sethrs("");
        setError("Invalid input");
        inputRefHrs.current.focus();
      } else {
        setSec("");
        setmin("");
        sethrs("");
        setError("Invalid input");
        inputRefHrs.current.focus();
      }
    } else {
      onStart();
    }
  };

  return (
    <div
      onClick={handlecompoclick}
      className="input-container flex flex-col font-custom bg-black text-white p-2 w-[270px] shadow-2xl shadow-orange-400 mx-auto rounded-3xl justify-center"
    >
      <div className="input-boxs flex flex-row p-10 justify-center items-center max-w-64">
        <input
          id="hrs"
        //   type="number"
          ref={inputRefHrs}
          value={hrs}
          onChange={(e) => {
            const value = e.target.value.slice(0,2);
            handleinput(e); // Call the first function
            sethrs(value); // Perform the second action
            if(value.length ===2){
                inputRefMin.current.focus();
            }
          }}
          className="hrs text-4xl p-2 max-w-14 flex-1 bg-transparent border-none focus:outline-none placeholder:text-gray-500 focus:placeholder:text-white"
          placeholder="00"
          autoComplete="off"
          maxLength={2}
        />
        <span className="text-gray-400">:</span>
        <input
          id="min"
          ref={inputRefMin}
          value={min}
          onChange={(e) => {
            const value = e.target.value.slice(0,2);
            handleinput(e); // Call the first function
            setmin(value); // Perform the second action
            if(value.length ===2){
                inputRefSec.current.focus();
            }
          }}
          maxLength={2}
          className="min text-4xl p-2 flex-1 max-w-14 bg-transparent border-none focus:outline-none placeholder:text-gray-500 focus:placeholder:text-white"
          placeholder="00"
          autoComplete="off"
        />
        <span className="text-gray-400">:</span>
        <input
          id="sec"
          ref={inputRefSec}
          autoComplete="off"
          value={sec}
          maxLength={2}
          // onChange={handleInput}
          // onChange={(e) => setSec(e.target.value)}
          onChange={(e) => {
            const value = e.target.value.slice(0,2);
            handleinput(e); // Call the first function
            setSec(value); // Perform the second action
          }}
          className="sec text-4xl p-2 flex-1 max-w-14 bg-transparent border-none focus:outline-none placeholder:text-gray-500 focus:placeholder:text-white"
          placeholder="00"
        />
      </div>

      <p
        className="text-center italic m-0 font-thin p-1 text-orange-400"
        style={{ display: error === "" ? "none" : "block" }}
      >
        {error}
      </p>

      <button
        className="start-btn p-3 m-0 text-lg rounded-2xl bg-white text-black hover:bg-orange-400 hover:text-white"
        onClick={checkInput}
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </div>
  );
};
