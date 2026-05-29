import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Explore from "./pages/Explore.jsx";
import Chat from "./pages/Chat.jsx";
import Profile from "./pages/Profile.jsx";
import Create from "./pages/Create.jsx";
import Notification from "./pages/Notification.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default App;