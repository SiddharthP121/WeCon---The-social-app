import React,{useState} from 'react';
import Left from './Left';
import Right from './Right';
import users from '../Dummy data/People';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const handleSearch = () => {
      const search = searchTerm.toLowerCase();
       const result = users.find(user => user.username.toLowerCase() === search || user.name.toLowerCase() === search)
         if(result){
              console.log(result)
        }
    }
  return (
    <>
      <div className="flex justify-between">
        <div className="w-[20vw]">
          <Left />
        </div>
        <div className="w-[50vw] flex justify-center items-start bg-black">
          <div className="sticky top-0 mt-4 flex items-center w-full max-w-md p-2 bg-black border border-gray-700 rounded">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 bg-black text-white border-none outline-none"
              onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <button className="ml-2 p-2 bg-white text-black rounded hover:bg-gray-200"
            onClick={handleSearch}>
                
              Search
            </button>
          </div>
        </div>
        <div className="w-[30vw]">
          <Right />
        </div>
      </div>
    </>
  );
};

export default Search;