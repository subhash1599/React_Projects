import React from "react";
import { Handle, Position } from "reactflow";
import "tailwindcss/tailwind.css";
import whatsapp from "../assets/whatsapp_icon.png";
import message from "../assets/message_icon.png";

const CustomNode = ({ data }) => {
  return (
    <div className=" border border-gray-300 rounded-lg overflow-hidden">
      <div className=" w-full bg-green-500 text-white flex items-center justify-center">
        <div className="flex px-5">
          <img className="h-5 pr-7" src={message} alt="" />
          <p>Send Message</p>
          <img className="pl-5 h-8" src={whatsapp} alt="whatsapp icon" />
        </div>
      </div>
      <div className="w-full bg-white text-black flex items-center justify-center">
        <div className="p-2">{data.text}</div>
      </div>
      <Handle type="target" position={Position.Left} id="a" />
      <Handle type="source" position={Position.Right} id="b" />
    </div>
  );
};

export default CustomNode;
