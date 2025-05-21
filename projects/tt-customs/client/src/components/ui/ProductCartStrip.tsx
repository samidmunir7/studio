import { MdOpenInNew, MdDelete } from "react-icons/md";

type ProductCartStripProps = {
  img: string;
  title: string;
  price: number;
};

const ProductCartStrip = (props: ProductCartStripProps) => {
  return (
    <div className="flex items-center justify-between bg-zinc-900 border-b-1 border-zinc-800 hover:bg-zinc-800 transition-all">
      <div>
        <img
          src={props.img}
          alt="Product image"
          className="w-[75px] rounded-md"
        />
      </div>
      <div className="flex items-center">
        <h1 className="text-xl text-zinc-300 font-semibold">{props.title}</h1>
        <p className="text-lg text-sky-500 font-bold">${props.price}</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-4 border-1 border-zinc-300 text-lg px-4 py-2 rounded-md text-zinc-300 hover:bg-zinc-300 hover:text-zinc-900 transition-all">
          <span>VIEW</span>
          <MdOpenInNew />
        </button>
        <button className="flex items-center gap-4 border-1 border-rose-800 text-lg px-4 py-2 rounded-md text-rose-500 hover:bg-rose-500 hover:text-zinc-300 transition-all">
          <span>DELETE</span>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default ProductCartStrip;
