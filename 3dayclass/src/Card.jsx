import React from "react";

const Card = ({ data }) => {
  return (
 
      <div className="w-60 h-80 p-5 flex flex-col justify-around items-center text-center gap-2 rounded-xl overflow-hidden shadow-md bg-white  hover:shadow-lg transition">

        {/* Image */}
        <img
          src={data.Imgurl}
          alt="profile"
          className=" w-25 h-25 object-cover rounded-[50%]"
        />

        {/* Content */}
        <div className="p-1 flex flex-col items-center   gap-1 ">
          <h2 className="text-2xl font-semibold text-gray-800 truncate">
            {data.Nam}
          </h2>

          <p className="text-xm text-indigo-600 font-medium">
            {data.Role}
          </p>

          <p className=" text-xs font-bold text-gray-600 leading-snug line-clamp-3">
            {data.Desc}
          </p>
          <button class="px-4 w-[70%]  py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 active:scale-95 transition">
            Remove
          </button>

        </div>
      </div>
   
  );
};

export default Card;