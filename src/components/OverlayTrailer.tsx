import { useOverlayContext } from '../context';

function OverlayTrailer() {
  const { setIsTrailerOpen } = useOverlayContext();

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center w-screen h-screen overflow-hidden duration-700 backdrop-blur-2xl">
      <div
        onClick={() => setIsTrailerOpen(false)}
        className="absolute top-0 bottom-0 left-0 right-0 -z-10"
      />
      <iframe
        src="https://www.youtube.com/embed/-1I9KtnVP1U?autoplay=1"
        className="w-[1280px] aspect-video"
      />
    </div>
  );
}

export default OverlayTrailer;
