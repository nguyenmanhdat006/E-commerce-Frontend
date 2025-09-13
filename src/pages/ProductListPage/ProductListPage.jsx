import FilterIcon from "../../components/common/FilterIcon";
import Categories from "../../components/Filters/Categories";
import content from "../../data/content.json";
import { useMemo } from "react";  

const categories = content?.categories;

const ProductListPage = ({categoryType}) => {

  const categoryContent = useMemo(() => {
    return categories?.find((Category) => Category.code === categoryType);
  } , [categoryType]); // chỉ khi categoryType thay đổi thì hàm mới chạy lại(nếu không thì dùng lại danh sách cũ)
  return (
    <>
      <div className="flex">
        <div className="w-[20%] p-[10px] border rounded-lg m-[20px]">
          <div className="flex justify-between">
            <p className="text-[16px] text-gray-600">Filter</p>
            <FilterIcon />
          </div>
          <p className="text-[16px] text-black mt-5">Categories</p>
          <Categories types={categoryContent?.types} />
        </div>
        <div className="p-[16px]">
          <p className="text-black text-lg">{categoryContent?.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductListPage;

