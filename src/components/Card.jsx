function Card({ item, index }) {
  return (
    <div className="shadow-md rounded-sm h-max pb-8 " key={index}>
      <img src={item.thumbnail} alt="image" className="md:w-full h-4/5 " />
      <div className="flex px-7 py-10 justify-between items-start gap-3">
        <div className="text-xl font-semibold text-left">{item.title}</div>
        <p className="text-base font-medium">${item.price}</p>
      </div>
      <p className="text-justify px-7 ">{item.description}</p>
    </div>
  );
}

export default Card;
