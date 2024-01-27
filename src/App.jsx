import "./App.css";
import illustration from "./assets/images/illustration-article.svg";
import avatar from "./assets/images/image-avatar.webp";

function App() {
  return (
    <>
      <main className="app">
        <img className="app__illustration" src={illustration} alt="Illustration" />
        <h1 className="app__title">Learning</h1>
        <p className="app__date">Published 21 Dec 2023</p>

        <h2 className="app__subtitle">HTML & CSS foundations</h2>
        <p className="app__description">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>

        <img className="app__avatar" src={avatar} alt="Avatar of man" />
        <h3 className="app__author">Greg Hooper</h3>
      </main>

      <footer className="app__attribution">
        Challenge by{" "}
        <a
          className="app__link"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a className="app__link" href="https://github.com/lucaslinyker">Lucas Linyker</a>.
      </footer>
    </>
  );
}

export default App;
