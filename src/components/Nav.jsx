function Nav(props) {
  function toggleDarkMode() {
    props.setDarkMode((prev) => !prev);
  }

  return (
    <nav className="bg-custom-neutral-0 flex items-center justify-between rounded-lg px-4 py-2 drop-shadow-lg">
      <img src="/public/images/logo.svg" alt="Extensions logo" />

      <div
        className="bg-custom-neutral-300 cursor-pointer rounded-xl p-3.5"
        onClick={toggleDarkMode}
      >
        <img
          src={
            props.darkMode
              ? "/public/images/icon-sun.svg"
              : "/public/images/icon-moon.svg"
          }
          alt="toggle dark mode"
        />
      </div>
    </nav>
  );
}

export default Nav;
