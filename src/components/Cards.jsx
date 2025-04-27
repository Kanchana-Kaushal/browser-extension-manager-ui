import { useState } from "react";
import extensionData from "../assets/data/extension-details.js";

function Cards(props) {
  const [extensions, setExtensions] = useState(extensionData);

  function extensionSwitch(name) {
    setExtensions((prev) =>
      prev.map((elem) => {
        if (elem.name === name) {
          return { ...elem, isActive: !elem.isActive };
        }
        return elem;
      }),
    );
  }

  function removeExtension(name) {
    setExtensions((prev) => prev.filter((elem) => elem.name !== name));
  }

  const cards = extensions.map((extension) => {
    if (props.filter === "active" && !extension.isActive) {
      return null;
    }

    if (props.filter === "inactive" && extension.isActive) {
      return null;
    }

    return (
      <div
        className="dark:bg-custom-neutral-800 ring-custom-neutral-600 rounded-2xl bg-white p-5 drop-shadow-md dark:ring-1"
        key={extension.name}
      >
        <div className="flex items-start gap-4">
          <img src={extension.logo} alt={extension.name} className="w-13" />

          <div>
            <h2 className="text-custom-neutral-900 dark:text-custom-neutral-0 mb-1 text-lg font-bold">
              {extension.name}
            </h2>
            <p className="text-custom-neutral-600 dark:text-custom-neutral-200 text-sm">
              {extension.description}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            className="ring-custom-neutral-300 dark:bg-custom-neutral-800 dark:text-custom-neutral-0 hover:bg-custom-red-500 focus:ring-custom-red-500 cursor-pointer rounded-2xl bg-white px-4 py-1 text-sm ring-1 outline-0 focus:ring-2"
            onClick={() => removeExtension(extension.name)}
          >
            Remove
          </button>

          <button
            className={`flex w-8 items-center rounded-2xl ring-2 ${extension.isActive ? "bg-custom-red-500 ring-custom-red-500 justify-end" : "bg-custom-neutral-300 ring-custom-neutral-300"} focus:ring-custom-red-500 cursor-pointer outline-0 focus:ring-2`}
            onClick={() => extensionSwitch(extension.name)}
            aria-pressed={extension.isActive}
            aria-label={extension.isActive ? "Set inactive" : "Set active"}
          >
            <div className="size-4 rounded-full bg-white"></div>
          </button>
        </div>
      </div>
    );
  });

  return (
    <section className="grid-cols-3 gap-4 space-y-4 md:grid md:space-y-0">
      {cards}
    </section>
  );
}

export default Cards;
