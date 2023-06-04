import React from "react";
// import AudioCallScreen from "./AudioCall";
// import VideoCallScreen from "./VideoCall";

const Dashboard = ({ handleLogout }) => {
  return (
    <div
      className="min-w-full min-h-screen bg-slate-700 justify-center items-center"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div>
        <h1
          className="text-3xl font-medium mb-6 subpixel-antialiased shadow-md p-3 rounded-md text-neutral-50 cursor-default
      transition ease-in- delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400 duration-300 "
        >
          <a href="/call/audio">Audio Call</a>
        </h1>
      </div>{" "}
      <div>
        <h1
          className="text-3xl font-medium subpixel-antialiased shadow-md p-3 rounded-md text-neutral-50 cursor-default
      transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400 duration-300"
        >
          <a href="/call/video">Video Call</a>
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
