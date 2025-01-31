import React from 'react'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
const NavIcons = () => {
  return (
    <div className=" flex md:flex gap-2 sm:gap-3 md:gap-4 bottom-0">
      <Link to={"/UserInfo"}><FaRegUser className="  hover:text-main-green   size-5  md:size-6 lg:size-5 cursor-pointer" /></Link>
      <Link to={"/ShoppingCart"}><FaShoppingCart className="  hover:text-main-green   size-5  md:size-6 lg:size-5 cursor-pointer" /></Link>
      <Link to={"/Heart"}><FaHeart className="  hover:text-main-green   size-5  md:size-6 lg:size-5 cursor-pointer" /></Link>
    </div>
  )
}

export default NavIcons
