import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Page!</h1>
      <Link to="/about"><button>Go to About</button></Link>
    </>
  )
}

export default Home;