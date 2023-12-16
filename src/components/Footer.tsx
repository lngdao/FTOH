import { styles } from '../common';

const Footer = () => {
  return (
    <section>
      <div className="flex justify-between max-md:flex-col max-md:gap-10 gap-14">
        <div className="flex flex-col justify-between max-md:gap-4 max-md:items-center">
          <p className="text-xl font-black text-white">
            FLAG TOWER OF <span className="text-primary">HANOI</span>
          </p>
          <p className="text-3xl font-black text-left max-sm:text-2xl">
            Are you ready to fight?
          </p>
          <div
            className={`${styles.flexCenter} w-[180px] py-3 max-md:w-[160px] bg-primary rounded-full hover:bg-primary-darker hover:scale-x-105 cursor-pointer`}
          >
            <p className="text-lg font-semibold text-white">Play now</p>
          </div>
        </div>
        <div className="flex lg:gap-20 max-md:grid max-md:grid-cols-2 max-md:gap-y-8 md:gap-14">
          <div>
            <p className="text-lg font-semibold text-secondary">SERVICES</p>
            <ul className="flex flex-col gap-2 mt-4">
              <li className="cursor-pointer hover:text-slate-200">
                Our Stores
              </li>
              <li className="cursor-pointer hover:text-slate-200">Campaigns</li>
              <li className="cursor-pointer hover:text-slate-200">
                Tournaments
              </li>
              <li className="cursor-pointer hover:text-slate-200">Offline</li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold text-secondary">ABOUT</p>
            <ul className="flex flex-col gap-2 mt-4">
              <li className="cursor-pointer hover:text-slate-200">Our Story</li>
              <li className="cursor-pointer hover:text-slate-200">Benefits</li>
              <li className="cursor-pointer hover:text-slate-200">Team</li>
              <li className="cursor-pointer hover:text-slate-200">Careers</li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold text-secondary">HELP</p>
            <ul className="flex flex-col gap-2 mt-4">
              <li className="cursor-pointer hover:text-slate-200">
                Terms & FAQs
              </li>
              <li className="cursor-pointer hover:text-slate-200">
                Contact Us
              </li>
            </ul>
          </div>
          <div>
            <input
              placeholder="Email address"
              className="w-full h-[50px] rounded-md px-3 bg-[#24253B]"
            />
            <div
              className={`${styles.flexCenter} h-[50px] mt-3 bg-[#475FF8] rounded-sm cursor-pointer`}
            >
              <p className="font-medium">Submit</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter} h-[70px] mt-16 mb-4`}>
        <p className="font-light text-[#777B9E] text-center">
          Flag Tower of Hanoi © 2023 <br />
          Developed with ☕️ by{' '}
          <a
            className="text-primary"
            target="_blank"
            href="https://github.com/lngdao"
          >
            lngdao
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
