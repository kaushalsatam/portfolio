import React from "react";

function Home() {
  return (
    <div id="home-container" className="h-screen w-full">
      <div id="header" className="flex justify-between m-4">
        <div id="logo-container" className="">
          <h1>kaushaldotdev</h1>
        </div>
        <ul className="w-1/3 flex justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
