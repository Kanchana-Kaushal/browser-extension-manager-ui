function Nav(props) {
  function toggleDarkMode() {
    props.setDarkMode((prev) => !prev);
  }

  return (
    <nav className="bg-custom-neutral-0 dark:bg-custom-neutral-800 flex items-center justify-between rounded-lg px-4 py-2 drop-shadow-lg">
      <img
        src="/browser-extension-manager-ui/images/logo.svg"
        alt="Extensions logo"
      />

      <button
        className="bg-custom-neutral-100 dark:bg-custom-neutral-700 ring-custom-red-500 cursor-pointer rounded-xl p-3.5 outline-0 focus:ring-2"
        onClick={toggleDarkMode}
        aria-label={
          props.darkMode ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        <img
          src={
            props.darkMode
              ? "/browser-extension-manager-ui/images/icon-sun.svg"
              : "/browser-extension-manager-ui/images/icon-moon.svg"
          }
          alt=""
          aria-hidden="true"
        />
      </button>
    </nav>
  );
}

export default Nav;
