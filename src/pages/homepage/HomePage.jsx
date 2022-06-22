import style from "./homepage.module.css";

const HomePage = () => {
  return (
    <div className={style.homepage}>
      <h1>Cover your page.</h1>
      <h3>
        Cover is a one-page template for building simple and beautiful home
        pages. Download, edit the text, and add your own fullscreen background
        photo to make it your own.
      </h3>
      <button>Learn more</button>
    </div>
  );
};

export { HomePage };
