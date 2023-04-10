import React from "react";
import InputBox from "../Layout/InputBox";
import Posts from "../Layout/Posts";

const ProfileBody = () => {
  return (
    <div className="flex gap-2 px-48 py-4 overflow-y-auto bg-gray-200">
      <div>
        <div className="p-2 bg-white rounded-md w-80">
          <h3>Intro</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, sunt.
          </p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="border h-fit">
        <InputBox />
        <div className="flex items-center justify-between p-2 my-2 bg-white rounded-xl title">
          <h1 className="text-2xl font-bold">Posts</h1>
          <p>Filter</p>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default ProfileBody;
