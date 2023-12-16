import mocklaptop from '../assets/mock_laptop.png';
import { styles } from '../common';

function LaptopAppSection() {
  return (
    <section className="flex flex-col grid-cols-2 gap-8 mt-16 md:grid" id="download">
      <div className={`${styles.flexCenter}`}>
        <img
          className="max-w-[500px] max-md:w-[340px]"
          src={mocklaptop}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-4xl font-bold max-md:text-3xl">
          Desktop Gaming: Explore Limitless Adventures!
        </h1>
        <p className="my-2">
          Dive into an unparalleled desktop gaming experience! Our meticulously
          crafted game offers sophisticated design, vibrant graphics, and
          limitless adventures. Optimized seamlessly for desktop environments,
          embark on your extraordinary journey today!
        </p>

        <div
          className={`${styles.flexCenter} w-[230px] py-5 max-md:py-3 max-sm:w-full bg-primary rounded-md mt-5 hover:bg-primary-darker hover:scale-x-105 cursor-pointer`}
        >
          <p className="text-lg font-semibold text-white">Get it now</p>
        </div>
      </div>
    </section>
  );
}

export default LaptopAppSection;
