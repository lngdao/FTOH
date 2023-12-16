import applestore from '../assets/applestore.svg';
import googleplay from '../assets/googleplay.svg';
import mockphone from '../assets/mock_phone.png';
import { styles } from '../common';

const MobileApp = () => {
  return (
    <section className="flex flex-col-reverse grid-cols-2 gap-8 mt-12 md:grid md:px-14">
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-4xl font-bold max-md:text-3xl">
          Upcoming on mobile? Of course!
        </h1>
        <p className="my-2">
          Dive into the intense world of mobile FPS gaming! Experience thrilling
          battles, stunning graphics, and authentic sounds on your phone. Crush
          your foes, level up, and become the ultimate hero. Ready for the
          challenge? Start your action-packed adventure with just a tap!
        </p>

        <div className="flex flex-row flex-wrap gap-2 sm:mt-10">
          <img
            src={applestore}
            alt="google_play"
            className="w-[128.86px] h-[42.05px] object-contain cursor-pointer"
          />
          <img
            src={googleplay}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      </div>
      <div className={`${styles.flexCenter}`}>
        <img
          className="max-w-[500px] max-md:w-[340px]"
          src={mockphone}
          alt=""
        />
      </div>
    </section>
  );
};

export default MobileApp;
