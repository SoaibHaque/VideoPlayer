import VideoPlayer from "@components/VideoPlayer.tsx";

function App() {
  return (
    <div className="w-full h-screen grid place-items-center bg-neutral-800">
      <div className="max-w-4xl">
        <VideoPlayer src="/video.mp4" />
      </div>
    </div>
  );
}

export default App;
