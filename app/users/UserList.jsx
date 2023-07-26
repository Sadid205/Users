"use client";
import Image from "next/image";
import React from "react";

const UserList = () => {
  const One = "/Image/1.png";
  const Two = "/Image/2.png";
  const Three = "/Image/3.png";
  const Four = "/Image/4.png";
  const Five = "/Image/5.png";
  const Six = "/Image/6.png";
  const userArray = [
    {
      name: "Leah Nichols",
      image: One,
      home: "Troy,Mi",
      roles: ["clothes", "stem"],
    },
    {
      name: "Jesus Weiss",
      image: Two,
      home: "Fort Worth,TX",
      roles: ["headset", "gadget", "speed", "winter"],
    },
    {
      name: "Annie Rice",
      image: Three,
      home: "Austin,TX",
      roles: ["road", "mountain", "trip", "earth", "nature"],
    },
    {
      name: "Robert Brower",
      image: Four,
      home: "Cincinnati,OH",
      roles: ["Maintenance", "gears", "frames", "repair"],
    },
    {
      name: "Amy Campbell",
      image:  Five ,
      home: "Warrior,AL",
      roles: ["music", "disks"],
    },
    {
      name: "Anthony S. Morin",
      image: Six,
      home: "Lyndhurst,NJ",
      roles: ["vintage", "electric"],
    },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {userArray.map((item, index) => (
        <div
          key={index}
          className="relative p-6 transition-all duration-300 scale-90 bg-white border-2 border-transparent rounded-lg shadow-lg hover:cursor-pointer hover:scale-100 hover:border-sky-500 h-60 w-96 "
        >
          <div className="relative flex">
            <div>
              <Image
                width={80}
                height={80}
                className="rounded-full"
                src={item.image}
                alt="personImage"
              />
            </div>
            <div className="absolute left-24">
              <h1 className="font-bold text-md">{item.name}</h1>
              <h3 className="text-sm font-semibold">{item.home}</h3>
            </div>
          </div>
          <div className="absolute flex flex-wrap right-10 top-30">
            {item.roles.map((role, index) => (
              <div className="h-10 p-2 text-center text-blue-500 transition-all duration-300 border border-transparent border-blue-400 rounded-full hover:bg-green-200 w-28" key={index}>{role}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
