import illustration from "../assets/images/illustration-article.svg";
import avatar from "../assets/images/image-avatar.webp";

function Card() {
  return (
    <main className="border-2 border-black dark:border-gray-200 shadow-1 dark:shadow-2 hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition p-4 rounded-xl w-72 bg-white dark:bg-black dark:text-gray-200">
      <img className="rounded-lg mb-4" src={illustration} alt="Illustration" />
      <h1 className="bg-yellow-300 dark:bg-yellow-700 rounded w-fit py-1 px-2 text-xs font-extrabold mb-2">
        Learning
      </h1>
      <p className="text-xs mb-2">Published 21 Dec 2023</p>

      <h2 className="font-extrabold text-lg mb-2 hover:cursor-pointer hover:text-yellow-300 hover:dark:text-yellow-700">HTML & CSS foundations</h2>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug mb-4">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>

      <div className="flex items-center gap-2" aria-hidden="true">
        <img className="h-7" src={avatar} alt="Avatar of man" />
        <h3 className="text-xs font-extrabold">Greg Hooper</h3>
      </div>
    </main>
  );
}

export default Card;
