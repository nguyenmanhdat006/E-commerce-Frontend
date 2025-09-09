import FilterIcon from "../../components/common/FilterIcon";
import content from "../../data/content.json";
import { useMemo } from "react";

const categories = content?.categories;

const ProductListPage = ({categoryType}) => {

  const categoryContent = useMemo(() => {
    return categories?.find((Category) => Category.code === categoryType);
  } , [categoryType]);
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
        <div className="p-[15px]">
          <p className="text-black text-lg">{categoryContent?.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductListPage;

