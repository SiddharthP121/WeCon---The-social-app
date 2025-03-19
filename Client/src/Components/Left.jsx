import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBell, FaStar, FaHeart, FaUserFriends, FaUser, FaInstagram, FaFacebook, FaWhatsapp, FaExclamationCircle, FaFileAlt, FaSearch } from 'react-icons/fa';
import { LiaConnectdevelop } from "react-icons/lia";

const Left = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4 min-w-[20vw] fixed flex flex-col justify-between items-center border-r-2 border-gray-500">
      <div className="w-full">
        <div className="logo mb-4 w-full flex items-center justify-start">
          <LiaConnectdevelop className="mr-2  text-purple-400 text-4xl" />
          <span className="text-2xl text-purple-400"><b>WeCon</b></span>
        </div>
        <nav className="space-y-4 w-full">
          <Link to="/home" className="py-2 px-4 rounded hover:bg-gray-700 text-center flex items-center justify-start">
            <FaHome className="mr-2 text-xl" /> Home
          </Link>
          <Link to="/notifications" className="py-2 px-4 rounded hover:bg-gray-700 text-center flex items-center justify-start">
            <FaBell className="mr-2 text-xl" /> Notifications
          </Link>
          <Link to="/search" className="py-2 px-4 rounded hover:bg-gray-700 text-center flex items-center justify-start">
            <FaSearch className="mr-2 text-xl" /> Search
          </Link>
          <Link to="/for-you" className="py-2 px-4 rounded hover:bg-gray-700 text-center flex items-center justify-start">
            <FaHeart className="mr-2 text-xl" /> For You
          </Link>
          <Link to="/following" className="py-2 px-4 rounded hover:bg-gray-700 text-center flex items-center justify-start">
            <FaUserFriends className="mr-2 text-xl" /> Following
          </Link>
          <Link to="/account" className="py-2 px-4 rounded hover:bg-gray-700 text-center flex items-center justify-start">
            <FaUser className="mr-2 text-xl" /> Account
          </Link>
        </nav>
        <Link to="/login" className="mt-4 py-2 px-4 bg-white text-black rounded hover:bg-gray-200 text-center block">
          Logout
        </Link>
      </div>
      <footer className="mt-4 w-full">
        <nav className="grid grid-cols-2 gap-2 w-full text-xs text-gray-400">
          <Link to="/instagram" className="py-1 px-4 rounded hover:text-white flex items-center justify-start">
            <FaInstagram className="mr-2 text-sm" /> Instagram
          </Link>
          <Link to="/facebook" className="py-1 px-4 rounded hover:text-white flex items-center justify-start">
            <FaFacebook className="mr-2 text-sm" /> Facebook
          </Link>
          <Link to="/contact-us" className="py-1 px-4 rounded hover:text-white flex items-center justify-start">
            <FaExclamationCircle className="mr-2 text-sm" /> Contact Us
          </Link>
          <Link to="/whatsapp" className="py-1 px-4 rounded hover:text-white flex items-center justify-start">
            <FaWhatsapp className="mr-2 text-sm" /> WhatsApp
          </Link>
          <Link to="/complaints" className="py-1 px-4 rounded hover:text-white flex items-center justify-start">
            <FaExclamationCircle className="mr-2 text-sm" /> Complaints
          </Link>
          <Link to="/terms" className="py-1 px-4 rounded hover:text-white flex items-center justify-start">
            <FaFileAlt className="mr-2 text-sm" /> Terms
          </Link>
        </nav>
        <div className="text-center text-xs text-gray-500 mt-4">
          &copy; 2025 WeCon. All rights reserved.
        </div>
       
      </footer>
    </div>
  );
};

export default Left;