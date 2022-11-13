const ItemLoader = () => {
  return (
    <div className="flex flex-col rounded-md border border-neutral-300 animate-pulse">
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-2 md:gap-8 px-5 py-2">
        <div className="flex flex-col flex-1 gap-3 py-2">
          <div className="h-5 bg-neutral-400 rounded"></div>
          <div className="h-2 bg-neutral-400 rounded"></div>
        </div>
        <div className="h-2 w-36 bg-neutral-400 rounded"></div>
        <div className="h-2 w-10 bg-neutral-400 rounded"></div>
        <div className="h-2 w-20 bg-neutral-400 rounded"></div>
      </div>
      <div className="flex flex-row justify-between  px-5 py-4 border border-neutral-300">
        <div className="flex flex-row gap-2">
          <div className="h-2 w-20 bg-neutral-400 rounded"></div>
          <div className="h-2 w-20 bg-neutral-400 rounded"></div>
          <div className="h-2 w-20 bg-neutral-400 rounded"></div>
        </div>
        <div className="h-2 w-24 bg-neutral-400 rounded"></div>
      </div>
    </div>
  );
};

export default ItemLoader;
