type PageTextType = {
  position: "right" | "left";
  title: string;
  imgUrl: string;
  description: string | string[];
};

const PageText = ({ imgUrl, position, title, description }: PageTextType) => {
  const classPosition = position === "left" ? "" : "flex-row-reverse";

  const isArray = Array.isArray(description);

  return (
    <div className="w-full h-full">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </div>
      <div
        className={
          "w-full h-[90%] flex items-center justify-around gap-28 " +
          classPosition
        }
      >
        <div className="w-3/6">
          <img
            src={imgUrl}
            alt="image-slide"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-3/6">
          {isArray ? (
            <ul className="text-3xl md:text-4xl lg:text-5xl  space-y-6  text-white list-disc list-inside">
              {description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-3xl leading-none tracking-tight text-white md:text-4xl lg:text-5xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageText;
