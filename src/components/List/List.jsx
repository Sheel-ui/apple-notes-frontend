import { FaListUl } from "react-icons/fa6";
import { BsTrash3 } from "react-icons/bs";
import { FiGrid } from "react-icons/fi";

const List = () => {
    return ( 
        <div className="List bg-accent-500 w-[20%] ">
            <div className="bg-accent-200 flex justify-between p-3 border-b border-black text-lg">
                <div className="flex">
                    <div className="px-2 py-1 text-gray-200 bg-white bg-opacity-10 rounded"><FaListUl /></div>
                    <div className="px-2 py-1 text-gray-400"><FiGrid /></div>
                
                </div>
                <div className="px-2 py-1 text-gray-400"><BsTrash3 /></div>
            </div>
        </div>
     );
}
 
export default List;