import { useState } from "react";
import more_horiz from "../../assets/more_horiz.svg";
import like from "../../assets/like.svg";
import liked from "../../assets/like_filled.svg";
import chat from "../../assets/chat.svg";
import share from "../../assets/share.svg";
import bookmark from "../../assets/bookmark.svg";
import "./Post.css";

function Post() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);

    if (!isLiked) {
      console.log("Post liked");
    } else {
      console.log("Post unliked");
    }
  };

  return (
    <div className="container">
      <div>
        <div className="author">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7jiUOlWSageJnEq9TEBRTcRF5tOL7Dhn5DBRdLVD5g&s=10"
            className="profilePic"
            alt="profile"
          />

          <div className="user-info">
            <p className="name">Meshack Oyugi</p>
            <p className="username">@beastdev</p>
          </div>
        </div>

        <img src={more_horiz} alt="more" />
      </div>

      <div>(content)</div>

      <div className="bottom">
        <div className="left">
          <button onClick={handleLike}>
            <img
              src={isLiked ? liked : like}
              alt="like"
            />
          </button>

          <img src={chat} alt="chat" />
          <img src={share} alt="share" />
        </div>

        <img src={bookmark} alt="bookmark" />
      </div>
    </div>
  );
}

export default Post;