import { Link } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Post from "../components/Post/Post.jsx";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <Post />
    </>
  );
}

export default Home;