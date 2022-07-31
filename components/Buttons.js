export const PrimaryButton = ({ children, handleOnClick }) => {
  return (
    <button
      type="button"
      className="group md:py-3 md:px-7 py-2 px-5 m-2 w-fit bg-purple-600 rounded-2xl inline-flex justify-center items-center transition-all duration-200 font-montserrat font-extrabold text-white dark:text-black md:text-2xl text-xl text-center hover:bg-purple-700"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export const OutlinedButton = ({ children, handleOnClick, type }) => {
  if (type == "big") {
    return (
      <button
        type={type}
        className="group md:py-3 md:px-7 py-2 px-5 m-2 w-fit border-2 border-black dark:border-white text-black dark:text-white rounded-2xl inline-flex justify-center items-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200 font-montserrat font-bold  text-2xl  text-center"
        onClick={handleOnClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type={type}
      className="py-1 px-6 w-fit border-2 m-2 border-black dark:border-white text-black dark:text-white rounded-lg inline-flex justify-center items-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200 font-montserrat font-bold  text-lg text-center"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
