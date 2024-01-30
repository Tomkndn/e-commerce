import { MdAddShoppingCart } from "react-icons/md";

const NoItem = () => {
  return (
    <div className="py-52 text-4xl text-[#035e5e] flex justify-center items-center">
      <div>
        <div className="flex justify-center items-center text-7xl">
          <MdAddShoppingCart />
        </div>
        <div className="">No Item in your cart.</div>
      </div>
    </div>
  );
};

export default NoItem;
