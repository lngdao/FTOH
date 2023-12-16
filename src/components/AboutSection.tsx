import { styles } from '../common';

function AboutSection() {
  return (
    <div className={`${styles.flexCenter} flex-col`}>
      <p className="text-2xl font-bold text-center">
        WELCOME TO THE DARK FUTURE
      </p>
      <p className="max-md:w-full max-w-[800px] mx-16 mt-4 text-xl font-light text-center">
        Immerse yourself in the future universe, from the original storyline of
        FTOH and its gripping spy-thriller expansion Renaissance — there are
        countless stories to discover in the deadly megalopolis of
        Post-apocalyptic Hanoi city.
      </p>
    </div>
  );
}

export default AboutSection;
