import "./video-modal.scss";

export default function VideoModal({ videoPath, onClose }) {
  return (
    <div className="modal">
      <div className="theme-color text-center mb-2">Teaser Video</div>
      <a href="https://www.youtube.com/watch?v=brxSumt7M8M" target="_blank">
        <video className="objectCover" width="100%" height="110px" controls>
          <source src={videoPath} type="video/mp4" />
        </video>
      </a>
      <div className="justify-end">
        <button
          className="theme-btn bradius theme-color mt-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
