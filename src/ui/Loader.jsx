const Loader = () => {
  return (
    <div className="grid grid-cols-4 w-full pt-10 pl-6">
      {Array.from({ length: 8 }, (_, i) => i + 1).map((el, i) => {
        return (
          <div className="flex flex-col gap-4 w-52 mb-10" key={i}>
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Loader;
