import { FiEdit } from "react-icons/fi";
import { IoTextOutline } from "react-icons/io5";
import { MdChecklist } from "react-icons/md";
import { RxTable } from "react-icons/rx";
import { BsImages } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuLink } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { GoShare } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const Preview = () => {
    return ( 
        <div className="Preview bg-accent-700 flex-1 border-l border-black">
            <div className="bg-accent-500 flex justify-between p-3 text-lg">
                <div className="flex">
                    <div className="px-2 py-1 text-gray-400"><FiEdit /></div>            
                </div>
                <div className="flex items-center space-x-1">
                    <div className="px-2 py-1 text-gray-400"><IoTextOutline /></div> 
                    <div className="px-2 py-1 text-gray-400"><MdChecklist /></div> 
                    <div className="px-2 py-1 text-gray-400"><RxTable /></div> 
                    <div className="px-2 py-1 text-gray-400 flex space-x-1"><BsImages /> <MdOutlineKeyboardArrowDown /></div>            
                </div>
                <div className="flex items-center space-x-1">
                    <div className="px-2 py-1 text-gray-400"><LuLink /></div>
                    <div className="px-2 py-1 text-gray-400 flex space-x-1"><IoLockClosedOutline /> <MdOutlineKeyboardArrowDown /></div>   
                    <div className="pr-2 py-1 text-gray-400"><GoShare /></div> 
                    <div className="px-1 py-1 text-gray-500 flex items-center border border-accent-50 w-[200px] rounded"><IoSearchOutline /> <span className="text-xs ml-1">Search</span></div>           
                </div>
            </div>
        </div>
     );
}
 
export default Preview;