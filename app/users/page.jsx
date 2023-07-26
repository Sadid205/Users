'use client'

import React from "react";
import {CiSearch} from "react-icons/ci"
import UserList from "./UserList";



const Users = () => {

  const userButton = ["Reputation","New users","Voters","Editors","Moderators"]

  return (
    <div className="p-10 bg-white">
      <h1 className="font-bold">Users</h1>
      <div className="items-center justify-between w-full p-4 sm:flex">
        <div className="relative flex items-center h-10 p-2">
          <input type="text" className="p-2 text-sm outline-none left-2 focus:border" placeholder="   Search users" />
          <span className="absolute text-lg left-2 top-3"><CiSearch/></span>
        </div>
        <div className="w-full sm:flex">
            {userButton.map((item,index)=> (
              <div className="items-center h-10 p-2 text-center border rounded-md hover:cursor-pointer hover:bg-blue-300 w-28"  key={index}>{item}</div>
            ))}
        </div>
      </div>
      <div>
       <UserList/>
      </div>
    </div>
  );
};

export default Users;
