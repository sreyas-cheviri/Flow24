
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <div className="my-auto text-3xl font-medium items-center mb-0 p-2 transform  hover:p-6   transition-all duration-1000 ease-in-out  bg-orange-400 text-white pb-2 pt-2 w-[272px]  shadow-2xl shadow-orange-900 mx-auto rounded-2xl flex justify-between ">
      <p className="text-sm font-medium text-gray-800 p-1 hover:text-white transition-all duration-500"><a href="https://x.com/sreyascheviri" target="_blank">X/Twitter</a></p>
      <p className="text-sm font-medium text-gray-800 p-1  hover:text-white  transition-all duration-500"><a href="https://github.com/sreyas-cheviri/Flow24" target="_blank">Github <span className='text-[10px]'>< FontAwesomeIcon icon={faStar} /></span> </a> </p>
    </div>)

}