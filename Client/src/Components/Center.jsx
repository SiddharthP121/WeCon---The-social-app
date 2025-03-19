import React from "react";
import users from "../Dummy data/People";
import { FaThumbsUp, FaShare, FaComment } from "react-icons/fa";

const Center = () => {
  return (
    <div className="text-white bg-black w-[50vw] p-4">
      <div className="hashtags peoples overflow-x-auto">
        <ul className="flex space-x-4 list-none bg-black">
          <li className="border border-gray-500 p-2 rounded-full">#NarendraModi</li>
          <li className="border border-gray-500 p-2 rounded-full">#RahulGandhi</li>
          <li className="border border-gray-500 p-2 rounded-full">#ChampionsTrophy</li>
          <li className="border border-gray-500 p-2 rounded-full">#MahaKumbh</li>
          <li className="border border-gray-500 p-2 rounded-full">#RamMandir</li>
          <li className="border border-gray-500 p-2 rounded-full">#Chhava</li>
          <li className="border border-gray-500 p-2 rounded-full">#AmitShah</li>
          <li className="border border-gray-500 p-2 rounded-full">#RussiaUkraineWar</li>
          <li className="border border-gray-500 p-2 rounded-full">#HolikaDahan</li>
          <li className="border border-gray-500 p-2 rounded-full">#DigitalArrest</li>
          <li className="border border-gray-500 p-2 rounded-full">#IPL</li>
          <li className="border border-gray-500 p-2 rounded-full">#VickyKaushal</li>
        </ul>
      </div>

      <div className="post flex flex-col items-center mt-4 p-4">
        {users.map((user) => (
          <div key={user.username} className="border border-gray-500 p-4 rounded-lg my-3 w-full">
            <div className="card items-center mb-4">
              <div className="flex items-center my-5">
                <img src={user.imageUrl} alt={user.noProfile} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p>{user.name}</p>
                  <p className="text-gray-500">{user.username}</p>
                </div>
              </div>
              <div className="postimg">
                <img className="w-full max-h-[60vh] object-contain" src={user.postUrl} alt="" />
                <div className="caption my-3">
                  <b>{user.name}</b><span className="mx-3">{user.caption}</span>
                </div>
                <div className="icons flex space-x-4 mt-2">
                  <FaThumbsUp className="text-gray-500 cursor-pointer" />
                  <FaComment className="text-gray-500 cursor-pointer" />
                  <FaShare className="text-gray-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Center;