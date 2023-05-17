import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/kwb020312")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        <span className="orange_gradient">OpenAI GPT-4</span>를 활용하여
        <br className="max-md:hidden" />
        복잡한 문장을 요약하세요!
      </h1>
      <h2 className="desc">
        복잡한 문장을 명확하고 간결한 문장으로 변환해보세요!
      </h2>
    </header>
  );
};

export default Hero;
