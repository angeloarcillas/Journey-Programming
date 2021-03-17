import React, { useState, useEffect } from "react";

const Tinder = () => {
  return (
    <div className="w-1/2 p-4 mx-auto shadow rounded bg-gray-50">
      <Header />
      <TinderCards />
      <Navigation />
    </div>
  );
};

function Header() {
  return (
    <div className="flex justify-between mb-12">
      <UserIcon />
      <FireIcon />
      <ForumIcon />
    </div>
  );
}

function UserIcon() {
  return (
    <span className="inline-block p-4 rounded-full hover:bg-white hover:shadow cursor-pointer">
      <svg
        className="w-8 text-gray-700 hover:text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

function FireIcon() {
  return (
    <span className="inline-block p-4 rounded-full hover:bg-white hover:shadow cursor-pointer">
      <svg
        className="w-8 text-red-400 hover:text-red-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

function ForumIcon() {
  return (
    <span className="inline-block p-4 rounded-full hover:bg-white hover:shadow cursor-pointer">
      <svg
        className="w-8 text-gray-700 hover:text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
      </svg>
    </span>
  );
}

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await fetch("http://localhost:8001/tinder/cards");
      setPeople(req.data);
    }

    fetchData();
  }, []);

  console.log(people);

  const onSwiped = (name) => {
    console.log(name);
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <div className="p-4 bg-gray-200 rounded">Left</div>
      <div className="relative w-1/2 h-80 border">
        {people.map((person) => {
          return (
            <TinderCard
              key={person.name}
              name={person.name}
              image={person.image}
              onSwiped={onSwiped}
            />
          );
        })}
      </div>
      <div className="p-4 bg-gray-200 rounded">Right</div>
    </div>
  );
}

function TinderCard({ name, image, onSwiped }) {
  return (
    <div className="absolute w-full h-full" onClick={() => onSwiped(name)}>
      <img src={image} alt={name} className="w-full h-full rounded" />
      <h2 className="absolute bottom-0 m-1 -mt-8 text-lg font-bold text-white">
        {name}
      </h2>
    </div>
  );
}

function Navigation() {
  return (
    <div className="w-3/4 mx-auto mb-6">
      <div className="flex justify-between items-center">
        <button className="inline-block p-4 bg-white rounded-full shadow hover:bg-gray-800 cursor-pointer">
          <svg
            className="w-8 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </button>
        <button className="inline-block p-4 bg-white rounded-full shadow hover:bg-gray-800 cursor-pointer">
          <svg
            className="w-8 text-red-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button className="inline-block p-4 bg-white rounded-full shadow hover:bg-gray-800 cursor-pointer">
          <svg
            className="w-8 text-blue-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
        <button className="inline-block p-4 bg-white rounded-full shadow hover:bg-gray-800 cursor-pointer">
          <svg
            className="w-8 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="inline-block p-4 bg-white rounded-full shadow hover:bg-gray-800 cursor-pointer">
          <svg
            className="w-8 text-purple-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Tinder;
