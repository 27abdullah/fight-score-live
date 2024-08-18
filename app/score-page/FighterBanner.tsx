export function FighterBanner({ name, image, shift }: FighterBannerProps) {
  return (
    <div className="">
      <img src={image} alt={name} className={``} />
      {/* <h1 className="text-2xl font-bold">{name}</h1> */}
    </div>
  );
}
