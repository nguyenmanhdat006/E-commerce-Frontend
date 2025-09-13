import FilterIcon from "../../components/common/FilterIcon";
import Categories from "../../components/Filters/Categories";
import PriceFilter from "../../components/Filters/priceFillter";
import ColorsFilter from "../../components/Filters/ColorsFilter";
import SizeFilter from "../../components/Filters/SizeFilter";
import ProductCard from "./ProductCard";
import content from "../../data/content.json";
import { useMemo } from "react";

const categories = content?.categories;

const ProductListPage = ({ categoryType }) => {
  const categoryContent = useMemo(() => {
    return categories?.find((Category) => Category.code === categoryType);
  }, [categoryType]); // chỉ khi categoryType thay đổi thì hàm mới chạy lại(nếu không thì dùng lại danh sách cũ)
  const productListItems = useMemo(() => {
    return content?.products?.filter((Product) => Product.category_id === categoryContent?.id);
  }, [categoryContent]);

  return (
    <>
      <div className="flex">
        <div className="w-[20%] p-[10px] border rounded-lg m-[20px]">
          {/* filter */}
          <div className="flex justify-between">
            <p className="text-[16px] text-gray-600">Filter</p>
            <FilterIcon />
          </div>
          <div>
            {/* product type */}
          <p className="text-[16px] text-black mt-5">Categories</p>
          <Categories types={categoryContent?.types} />
          <hr></hr>
          </div>
            {/* price */}   
            <PriceFilter />
            <hr></hr>  

            {/* color */}
            <ColorsFilter colors={categoryContent?.meta_data?.colors} />
            <hr></hr>

            {/* size */}
            <SizeFilter sizes={categoryContent?.meta_data?.sizes}/>
          </div>
        <div className="p-[15px]">
          <p className="text-black text-lg">{categoryContent?.description}</p>
          {/* product */}
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-2">
            {productListItems?.map((item) => (
              <ProductCard {...item} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductListPage;
