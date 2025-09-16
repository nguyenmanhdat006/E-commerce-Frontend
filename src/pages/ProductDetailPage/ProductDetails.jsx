import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const BreadcrumbLinks = [{title: "shop", path: "/shop"}, {title: "Women", path: "/womens"}, {title: "Top", path: "/top"}];

const ProductDetails = () => {
  const { product } = useLoaderData();
  const [image, setImage] = useState(product?.thumbnail);
  return (
    <div className="flex flex-col md:flex-row p-10">
      <div className="w-[100%] lg:w-[50%] md:w-[40%]">
        {/* image */}
        <div className="flex flex-col md:flex-row">
          <div className="w-[100%] md:w-[20%] justify-center h-[40px] md:h-[420px]">
            {/* stack image */}
              <div className="flex flex-row md:flex-col justify-center h-full">
                {
                  product?.images?.map((item, index) => (
                    <button onClick={() => setImage(item)} className="rounded-lg w-fit p-2 mb-2"><img src={item} className="h-[60px] w-[60px] bg-center p-2 hover:scale-105" alt={"sample-" + index} /> </button>
                  ))
                }
              </div>
          </div>
          <div className="w-full md:w-[80%] flex-justify-center md:pt-0 pt-10">
            <img src={image} className=" h-full w-full max-h-[520px] border rounded-lg cursor-pointer object-cover" alt={product?.title}/>

          </div>

        </div>

      </div>
      <div className="w-[60%]">
        {/* product description */}
        <Breadcrumb links={BreadcrumbLinks} />
      </div>
    </div>
  );
};
        
export default ProductDetails;
