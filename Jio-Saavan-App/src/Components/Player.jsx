import React from 'react'
import { BiRepeat } from "react-icons/bi";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { PiShuffleBold } from "react-icons/pi";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { LuHardDriveDownload } from "react-icons/lu";
import VolumeController from "./VolumeController";
import { useState, useContext, useRef, useEffect } from "react";

const Player = () => {
    const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  return (
    <div className="fixed bottom-0 right-0 left-0 bg-[#f5f5f5ff] flex flex-col">
      <input
        type="range"
        name="progress"
        id="progress"
        min={0}
        max={100}
        step="0.1"
        value={0}
        className="w-full h-[5px] text-green-400 range"
      />
      <div className="flex justify-between items-center mb-3 px-3">
        <div className="flex justify-start items-center gap-3 lg:w-[30vw]">
          <img
          src=''
            alt=""
            width={55}
            className="rounded-lg"
          />
          <div className="hidden lg:block">
            <span>Lorem, ipsum.</span>
            <p className="text-xs text-gray-500">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div className="flex text-2xl lg:text-3xl gap-4 lg:gap-6 lg:w-[40vw] justify-center">
          <BiRepeat className="text-gray-400 cursor-pointer" />
          <IoMdSkipBackward
            className="text-gray-700 hover:text-gray-500 cursor-pointer"
          />
          
            <FaPause
              className="text-gray-700 hover:text-gray-500 cursor-pointer"
             
            />
        
            <FaPlay
              className="text-gray-700 hover:text-gray-500 cursor-pointer"
             
            />
       

          <IoMdSkipForward
            className="text-gray-700 hover:text-gray-500 cursor-pointer"
          />
          <PiShuffleBold className="text-gray-400 cursor-pointer" />
        </div>


        <div
          className="flex lg:w-[30vw] justify-end items-center "
         
        >
          <LuHardDriveDownload
           
            className="text-gray-700 hover:text-gray-500 text-2xl lg:text-3xl cursor-pointer lg:mr-2"
          />
          <HiSpeakerWave  onMouseEnter={() => setIsVolumeVisible(true)}
          onMouseLeave={() => setIsVolumeVisible(false)} className="text-gray-700 hover:text-gray-500 text-2xl lg:text-3xl cursor-pointer hidden lg:block" />
          <VolumeController isVolumeVisible={isVolumeVisible} />
        </div>
      </div>
    </div>
  );
};

export default Player
