import FilterIcon from "../../components/common/FilterIcon";
const ProductListPage = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[20%] p-[10px] border rounded-lg m-[20px]">
          <div className="flex justify-between">
            <p className="text-[16px] text-gray-600">Filter</p>
            <FilterIcon />
          </div>
          <p className="text-[16px] text-black mt-5">Categories</p>
        </div>
        <div className="p-[40px]">
          <p>Hello!</p>
        </div>
      </div>
    </>
  );
};

export default ProductListPage;

