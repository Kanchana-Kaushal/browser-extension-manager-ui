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
      return;
    }

    if (props.filter === "inactive" && extension.isActive) {
      return;
    }

    return (
      <div
        className="rounded-2xl bg-white p-5 drop-shadow-md"
        key={extension.name}
      >
        <div className="flex items-start gap-4">
          <img src={extension.logo} alt="" className="w-13" />

          <div>
            <h2 className="text-custom-neutral-900 text-lg font-bold">
              {extension.name}
            </h2>
            <p className="text-custom-neutral-600 text-xs">
              {extension.description}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            className="ring-custom-neutral-300 cursor-pointer rounded-2xl bg-white px-4 py-1 text-sm ring-1"
            onClick={() => removeExtension(extension.name)}
          >
            Remove
          </button>

          <div
            className={`flex w-8 cursor-pointer items-center rounded-2xl ring-2 ${extension.isActive ? "bg-custom-red-700 ring-custom-red-700 justify-end" : "bg-custom-neutral-300 ring-custom-neutral-300"}`}
            onClick={() => extensionSwitch(extension.name)}
          >
            <div className="size-4 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    );
  });

  return <section className="space-y-4">{cards}</section>;
}

export default Cards;
