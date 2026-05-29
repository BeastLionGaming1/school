import { useEffect, useState } from "react";

function Header() {
  return (
    <>
      <header>
        <h2 className="logo">Home</h2>
        <div className="search-container">
          <img src={assets.search} />
          <input 
          type="text" 
          placholder="Search students, notes, communities..." 
          />
        </div>
        <button className="newPost">New Post</button>
        <img 
          src=""
          alt="not"
        />
        <img src="" alt="user" />
      </header>
    </>
  )
}