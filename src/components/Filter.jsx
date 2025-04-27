function Filter(props) {
  return (
    <section className="my-6 items-center justify-between md:flex">
      <h1 className="text-custom-neutral-900 dark:text-custom-neutral-0 text-center text-3xl font-bold">
        Extension List
      </h1>

      <fieldset className="flex items-center justify-center gap-4 border-0 py-4">
        <legend className="sr-only">Filter extensions</legend>

        <button
          className={`text-custom-neutral-800 ring-custom-red-500 cursor-pointer rounded-2xl px-4 py-1 outline-0 drop-shadow-sm focus:ring-2 ${
            props.filter === "all"
              ? "bg-custom-red-500 dark:text-custom-neutral-0 text-white"
              : "dark:bg-custom-neutral-700 dark:hover:bg-custom-neutral-600 hover:bg-custom-neutral-100 bg-white dark:text-white"
          } `}
          onClick={() => props.setFilter("all")}
          aria-pressed={props.filter === "all"}
        >
          All
        </button>
        <button
          className={`text-custom-neutral-800 ring-custom-red-500 cursor-pointer rounded-2xl px-4 py-1 outline-0 drop-shadow-sm focus:ring-2 ${
            props.filter === "active"
              ? "bg-custom-red-500 dark:text-custom-neutral-0 text-white"
              : "dark:bg-custom-neutral-700 dark:hover:bg-custom-neutral-600 hover:bg-custom-neutral-100 bg-white dark:text-white"
          } `}
          onClick={() => props.setFilter("active")}
          aria-pressed={props.filter === "active"}
        >
          Active
        </button>
        <button
          className={`text-custom-neutral-800 ring-custom-red-500 cursor-pointer rounded-2xl px-4 py-1 outline-0 drop-shadow-sm focus:ring-2 ${
            props.filter === "inactive"
              ? "bg-custom-red-500 dark:text-custom-neutral-0 text-white"
              : "dark:bg-custom-neutral-700 dark:hover:bg-custom-neutral-600 hover:bg-custom-neutral-100 bg-white dark:text-white"
          } `}
          onClick={() => props.setFilter("inactive")}
          aria-pressed={props.filter === "inactive"}
        >
          Inactive
        </button>
      </fieldset>
    </section>
  );
}

export default Filter;
