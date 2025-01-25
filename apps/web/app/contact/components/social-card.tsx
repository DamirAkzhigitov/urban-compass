import Image from 'next/image';
import avatar from './avatar.webp';

export const SocialCard = () => {
  return (
    <div className="flex min-h-[490px] w-72 max-w-sm flex-col gap-4 rounded-md border p-8 ">
      <div className="my-4 text-center">
        <Image
          className="mx-auto my-4 h-32 w-32 rounded-full border-4 border-white dark:border-gray-800"
          src={avatar}
          alt=""
        />
        <div className="py-2">
          <h3 className="mb-1 font-bold text-2xl text-gray-800 dark:text-white">
            Damir Akzhigitov
          </h3>
          <div className="inline-flex items-center text-gray-700 dark:text-gray-300">
            <svg
              className="mr-1 h-5 w-5 text-gray-400 dark:text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                className=""
                d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
              />
            </svg>
            Nicosia, Cyprus
          </div>
        </div>
      </div>
      <div className="flex gap-2 px-2">
        <a
          href="https://linkedin.com/in/damir-akzhigitov"
          target="_blank"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-center font-bold text-white antialiased hover:bg-blue-800 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-900"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match mr-3"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
          Message
        </a>
      </div>
    </div>
  );
};
