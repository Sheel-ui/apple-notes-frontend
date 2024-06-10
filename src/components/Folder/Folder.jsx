import { PiSidebar } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoFolderOutline } from "react-icons/io5";
import { LuPlusCircle } from "react-icons/lu";

const Folder = () => {
	return (
		<div className="Folder bg-accent-300 w-[15%] border-r border-black flex flex-col justify-between text-white px-2 py-2">
			<div>
				<PiSidebar className="text-2xl m-1 text-accent-100 mx-2" />
				<div className="flex justify-between items-center mt-3 px-2">
					<div className="flex items-center py-1">
						<CgProfile className="text-amber-400 inline-block text-[15px]" />
						<p className="inline-block text-[13px] text-gray-200 ml-2">
							Shared
						</p>
					</div>
					<p className="text-[13px] text-gray-400">1</p>
				</div>
				<p  className="text-[12px] text-gray-400 mt-3 ml-2 mb-1">iCloud</p>
				<div className="flex justify-between items-center bg-accent-50 px-2 rounded-md">
					<div className="flex items-center py-1">
						<IoFolderOutline className="text-amber-400 inline-block text-[15px]" />
						<p className="inline-block text-[13px] text-gray-200 ml-2">
							Notes
						</p>
					</div>
					<p className="text-[13px] text-gray-400">58</p>
				</div>
				<p  className="text-[12px] text-gray-400 mt-3 ml-2">Tags</p>
			</div>
			<div className="flex justify-between">
				<div>
					<LuPlusCircle className="inline-block text-[15px] text-gray-400" />
					<p className="inline-block text-[13px] text-gray-400 ml-2">
						New Folder
					</p>
				</div>
			</div>
		</div>
	);
};

export default Folder;
