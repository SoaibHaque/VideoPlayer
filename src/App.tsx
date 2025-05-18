import VideoPlayer from "./lib";

function App() {
  return (
    <div className="w-full h-screen grid place-items-center bg-neutral-800">
      <div className="max-w-4xl rounded-md overflow-hidden">
        <VideoPlayer src="/video.mp4" />
      </div>
    </div>
  );
}

export default App;
