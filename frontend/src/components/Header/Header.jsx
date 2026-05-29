import { useEffect, useState } from "react";

function Header() {
  const [input, setInput] = useState();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  async function getProfile() {
    try {
      const res = await fetch("http://localhost:3000/auth/v1/me");
      const data = await res.json()
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }
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