import { FaListUl } from "react-icons/fa6";
import { BsTrash3 } from "react-icons/bs";
import { FiGrid } from "react-icons/fi";
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const List = ({ onUserClick, newCreated  }) => {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [deletedItem, setDeletedItem] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const url = "http://localhost:8080/segregated-todos";
      const response = await axios.get(url);
      setData(response.data);

      const firstKey = Object.keys(response.data)[0];
      if (response.data[firstKey] && response.data[firstKey].length > 0) {
        setSelectedItemId(response.data[firstKey][0].id);
        onUserClick(response.data[firstKey][0].id);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [onUserClick]);

  useEffect(() => {
	console.log('called')
    fetchData();
  }, [fetchData, deletedItem,newCreated]);

  const handleDelete = async (id) => {
    try {
      const url = `http://localhost:8080/item/${id}`;
      await axios.delete(url);
      setDeletedItem(id);
      setSelectedItemId(-1);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleItemClick = (id) => {
	onUserClick(id);
    setSelectedItemId(id);
  };


  return (
    <div className="List bg-accent-500 w-[20%] flex flex-col">
      <div className="bg-accent-200 flex justify-between p-3 border-b border-black ">
        <div className="flex">
          <div className="px-2 py-1 text-gray-200 bg-white bg-opacity-10 rounded">
            <FaListUl />
          </div>
          <div className="px-2 py-1 text-gray-400">
            <FiGrid />
          </div>
        </div>
        <div className="px-2 py-1 text-gray-400 "
		onClick={() => handleDelete(selectedItemId)}
		style={{ cursor: 'pointer' }}>
          <BsTrash3 />
        </div>
      </div>

      <div className="text-gray-200 text-[12px] flex flex-1 flex-col overflow-y-auto no-scrollbar">
        <h1 className="absolute px-4 border-b border-accent-200 bg-accent-500 w-[20%] text-gray-400 font-bold py-1 mb-2">
          Today
        </h1>
        <div className="flex-1">
          {Object.keys(data).map((key) => (
            <div key={key} className="mx-4 mb-4">
              <h1 className="text-gray-400 font-bold py-1 mb-2">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h1>
              <div>
                {data[key].map((item, index) => (
                  <div
                    key={item.id}
                    className={`py-3 px-4 rounded-lg cursor-arrow ${
                      index !== data[key].length - 1
                        ? "border-b border-accent-200"
                        : ""
                    } ${selectedItemId === item.id ? "bg-accent-50" : ""}`}
                    onClick={() => handleItemClick(item.id)}
                  >
                    <h1 className="font-bold text-[13px]">{item.title === "" ? "New Note" : item.title}</h1>
                    <div className="space-x-2 truncate overflow-hidden text-gray-400">
                      <span className="text-gray-200">{item.createdAt}</span>
                      <span>{item.description === "" ? "No additional text" : item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
