import man_mock from '../assets/man_mock.png';
import man_mock2 from '../assets/man_mock2.png';
import { Star } from 'lucide-react';

function TestmonialsSection() {
  return (
    <div className={`flex-col mt-20`}>
      <div className="flex items-center justify-center gap-2">
        <div className="w-[40px] h-[2px] bg-primary" />
        <p className="text-sm font-medium text-primary">TESTIMONIALS</p>
        <div className="w-[40px] h-[2px] bg-primary" />
      </div>
      <div className="flex justify-center lg:gap-8 mt-14 max-lg:flex-col max-lg:items-center max-sm:gap-8 sm:gap-14">
        <div className="h-[200px] max-w-[500px] grid grid-cols-5 bg-[#292945] rounded-lg">
          <div className="flex flex-col justify-between flex-1 col-span-3 p-6">
            <div className="flex">
              {Array(5)
                .fill({})
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                .map((_, index) => (
                  <Star
                    key={index}
                    className="text-[#FFD06A]"
                    fill="#FFD06A"
                    size={18}
                  />
                ))}
            </div>
            <p className="font-light max-sm:text-[13px]">
              Mind-blowing graphics and addictive gameplay! A must-play
              masterpiece.
            </p>
            <p className="text-lg font-semibold">Jimmy Ti</p>
          </div>
          <div className="relative col-span-2">
            <img
              className="absolute sm:bottom-[10%] sm:right-[5%] object-cover h-full sm:scale-[1.2]"
              src={man_mock}
            />
          </div>
        </div>
        <div className="h-[200px] max-w-[500px] grid grid-cols-5 bg-[#292945] rounded-lg">
          <div className="flex flex-col justify-between flex-1 col-span-3 p-6">
            <div className="flex">
              {Array(5)
                .fill({})
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                .map((_, index) => (
                  <Star
                    key={index}
                    className="text-[#FFD06A]"
                    fill="#FFD06A"
                    size={18}
                  />
                ))}
            </div>
            <p className="font-light max-sm:text-[13px]">
              Addictive desktop experience with constant exciting updates.
              Highly recommend!
            </p>
            <p className="text-lg font-semibold">Johnny Silverhand</p>
          </div>
          <div className="relative col-span-2">
            <img
              className="absolute sm:bottom-[10%] sm:right-[5%] object-cover h-full sm:scale-[1.2]"
              src={man_mock2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestmonialsSection;
