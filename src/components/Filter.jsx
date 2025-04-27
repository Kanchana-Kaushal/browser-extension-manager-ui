function Filter(props) {
  return (
    <section className="my-6">
      <h1 className="text-custom-neutral-900 text-center text-3xl font-bold">
        Extension List
      </h1>

      <div className="flex items-center justify-center gap-4 py-4">
        <button
          className="text-custom-neutral-800 cursor-pointer rounded-2xl bg-white px-4 py-1 drop-shadow-sm"
          onClick={() => props.setFilter("all")}
        >
          All
        </button>
        <button
          className="text-custom-neutral-800 cursor-pointer rounded-2xl bg-white px-4 py-1 drop-shadow-sm"
          onClick={() => props.setFilter("active")}
        >
          Active
        </button>
        <button
          className="text-custom-neutral-800 cursor-pointer rounded-2xl bg-white px-4 py-1 drop-shadow-sm"
          onClick={() => props.setFilter("inactive")}
        >
          Inactive
        </button>
      </div>
    </section>
  );
}

export default Filter;
