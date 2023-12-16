import game_trailer from '../assets/game_trailer.mp4';
// import hero_video from './assets/hero_video.mp4';
import logo from '../assets/logo.png';
import ggplayLogo from '../assets/gplay_icon.png';
import appleStoreLogo from '../assets/apple_store_icon.png';
import psnLogo from '../assets/psn_icon.png';
import steamIcon from '../assets/steam_icon.png';
import xboxIcon from '../assets/xbox_icon.png';
import esrb from '../assets/ESRB_Teen.png';

import { styles } from '../common';

function Hero() {
  return (
    <>
      <video
        className={`${styles.absoluteFill} -z-20 object-cover w-full h-full`}
        src={game_trailer}
        autoPlay
        loop
        muted
        playsInline
        style={{ imageRendering: 'crisp-edges' }}
      />
      <div
        className={`${styles.flexCenter} ${styles.absoluteFill} flex-col backdrop-brightness-50 backdrop-blur-sm`}
      >
        <a href="https://www.esrb.org/ratings-guide/" target="_blank">
          <img
            className="absolute w-[60px] bottom-8 left-10 opacity-70 max-lg:hidden hover:opacity-90 cursor-pointer"
            src={esrb}
            alt=""
          />
        </a>
        <div className={`${styles.flexCenter} flex-col mb-10`}>
          <img
            src={logo}
            alt=""
            className="lg:w-[450px] max-sm:w-[180px] sm:w-[350px] xl:w-[600px]"
          />
          <p className="mt-4 text-4xl font-extrabold text-center text-white uppercase max-md:text-3xl max-sm:text-2xl">
            A Horizon Worth the Conquest
          </p>
          <p className="mt-3 text-lg font-semibold text-white max-md:text-md max-sm:text-sm">
            FPS AND FAST-PACED • FREE TO PLAY
          </p>
          <div className="flex gap-4 mt-5">
            <div
              className={`${styles.flexCenter} w-[230px] py-4 max-md:py-2 max-md:w-[130px] bg-[#475FF8] rounded-md  hover:bg-[#324dfa] hover:scale-x-105 cursor-pointer`}
            >
              <p className="text-lg font-semibold text-white">Trailer</p>
            </div>
            <div
              className={`${styles.flexCenter} w-[230px] py-4 max-md:py-2 max-md:w-[130px] bg-primary rounded-md  hover:bg-primary-darker hover:scale-x-105 cursor-pointer`}
            >
              <p className="text-lg font-semibold text-white">Play now</p>
            </div>
          </div>
        </div>

        <div className="absolute flex items-center self-center gap-16 bottom-8 max-sm:gap-10 max-sm:bottom-5">
          <div className="flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-95">
            <img className="w-[36px] max-sm:w-[20px]" src={steamIcon} alt="" />
            <p className="text-lg font-medium text-white max-md:hidden">
              Steam
            </p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-95">
            <img className="w-[40px] max-sm:w-[26px]" src={psnLogo} alt="" />
            <p className="text-lg font-medium text-white max-md:hidden">
              Playstation
            </p>
          </div>{' '}
          <div className="flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-95">
            <img className="w-[40px] max-sm:w-[26px]" src={xboxIcon} alt="" />
            <p className="text-lg font-medium text-white max-md:hidden">Xbox</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-95">
            <img
              className="w-[40px] max-sm:w-[26px]"
              src={appleStoreLogo}
              alt=""
            />
            <p className="text-lg font-medium text-white max-md:hidden">
              Apple Store
            </p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-95">
            <img className="w-[34px] max-sm:w-[20px]" src={ggplayLogo} alt="" />
            <p className="text-lg font-medium text-white max-md:hidden">
              Google Play
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
