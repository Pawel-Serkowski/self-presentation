import { useRef, useState } from "react";
import { motion } from "framer-motion";

import "./video.scss";

const Video = ({ file, variants, inView }) => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const playHandle = () => {
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      videoRef.current.pause();
      return;
    }
    videoRef.current.play();
  };

  return (
    <motion.div
      className="videoContainer"
      variants={variants}
      animate={inView && "animate"}
      initial="initial"
    >
      <video ref={videoRef}>
        <source src={file} type="video/mp4" />
      </video>
      <motion.button
        onClick={playHandle}
        style={{ opacity: isPlaying ? 0 : 1 }}
        whileHover={{ opacity: 0.6 }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          style={{ marginLeft: isPlaying ? "1%" : "5%" }}
        >
          {isPlaying && (
            <path
              d="M8 5V19M16 5V19"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          {!isPlaying && (
            <path
              d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default Video;
