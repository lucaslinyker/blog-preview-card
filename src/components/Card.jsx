import illustration from "../assets/images/illustration-article.svg";
import avatar from "../assets/images/image-avatar.webp";

function Card() {
  return (
    <main>
      <img src={illustration} alt="Illustration" />
      <h1>Learning</h1>
      <p>Published 21 Dec 2023</p>

      <h2>HTML & CSS foundations</h2>
      <p>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>

      <div aria-hidden="true">
        <img src={avatar} alt="Avatar of man" />
        <h3>Greg Hooper</h3>
      </div>
    </main>
  );
}

export default Card;
