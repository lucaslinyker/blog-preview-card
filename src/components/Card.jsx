import illustration from "../assets/images/illustration-article.svg";
import avatar from "../assets/images/image-avatar.webp";

function Card() {
  return (
    <main className="w-72 rounded-xl border-2 border-black bg-white p-4 shadow-1 transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:border-gray-200 dark:bg-black dark:text-gray-200 dark:shadow-2">
      <img className="mb-4 rounded-lg" src={illustration} alt="Illustration" />
      <h1 className="mb-2 w-fit rounded bg-yellow-300 px-2 py-1 text-xs font-extrabold dark:bg-yellow-700">
        Learning
      </h1>
      <p className="mb-2 text-xs">Published 21 Dec 2023</p>

      <a
        className="mb-2 inline-block text-lg font-extrabold hover:cursor-pointer hover:text-yellow-300 hover:dark:text-yellow-700"
        href="#"
      >
        HTML & CSS foundations
      </a>
      <p className="mb-4 text-xs leading-snug text-zinc-500 dark:text-zinc-400">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>

      <div className="flex items-center gap-2" aria-hidden="true">
        <img className="h-7" src={avatar} alt="Avatar of man" />
        <h2 className="text-xs font-extrabold">Greg Hooper</h2>
      </div>
    </main>
  );
}

export default Card;
