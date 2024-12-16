import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStop,faPause } from '@fortawesome/free-solid-svg-icons';



export const Counter = ({onreset}) => {
    return (
        <div className="font-custom text-2xl input-container flex flex-col font-medium bg-black text-white p-3  shadow-2xl shadow-orange-900 mx-auto rounded-3xl justify-center">
            <div className="input-boxs flex flex-row p-10 justify-center items-center max-w-64 ">
                <div
                    className="hrs text-4xl p-2  flex-1 bg-transparent  border-none"
                    placeholder="00"
                >00</div>
                <span>:</span>
                <div
                    className="min text-4xl p-2 flex-1  bg-transparent border-none"
                    placeholder="00"
                    >00</div>
                    <span>:</span>
                <div
                    className="sec text-4xl p-2 flex-1 bg-transparent border-none"
                    placeholder="00"
                    >00</div>
            </div>
            <div className="flex gap-1 justify-center w-full">
            <button className="start-btn p-3 m-0 w-full text-lg bg-white text-black rounded-l-2xl hover:bg-orange-400 hover:text-white "  onClick={onreset} >
            <FontAwesomeIcon icon={faStop} />
            </button>
            <button className="start-btn p-3 m-0 text-lg w-full rounded-r-2xl bg-white text-black hover:bg-orange-400 hover:text-white ">
            <FontAwesomeIcon icon={faPause} />
            </button></div>
        </div>
    );
};
