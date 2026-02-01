// import { Select } from "antd";
// import { products_title } from "../../../utils";
// import { useSearchParamsHandler } from "../../../hooks/paramsApi";


//     const ProductsTitle = () => {
//         const {setParam, getParam } = useSearchParamsHandler();
//         const category = getParam("category") || "house-plants";
//         const range_min = getParam("range_min") || "0";
//         const range_max = getParam("range_max") || "1000";
//         const type = getParam("type") || "all-products";
//         const sort = getParam("sort") || "default-sorting";
//         const changed = (e: string)=> {
//             setParam({ sort:e });
//         }
//         return (
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-4 cursor-pointer">
//               {products_title.map((value) => (
//                 <h3
//                   onClick={() =>
//                     setParam({
//                       category,
//                       range_max,
//                       range_min,
//                       type: value.route_path,
//                     })
//                   }
//                   className={`hover:text-nav ${value.route_path === type ? "text-nav font-bold border-b-2 border-nav pb-2" : "text-[#3d3d3d]" }`}
//                   key={value.id}
//                 >
//                   {value.title}
//                 </h3>
//               ))}
//             </div>

//             <div className="flex items-center gap-2">
//               Short by:
//               <Select
//               onChange={changed}
//                 defaultValue={sort}
//                 style={{ width: 150 }}
//                 options={[
//                   { value: "default_sorting", label: "Default sorting" },
//                   { value: "the-cheapest", label: "The Cheapest" },
//                   { value: "most-expensive", label: "Most Expensive" },
//                 ]}
//               />
//             </div>
//           </div>
//         );
//     };

//     export default ProductsTitle;




























































































import { Select } from "antd";

import { products_title } from "../../../utils";
import { useSearchParamsHandler } from "../../../hooks/paramsApi";

const ProductsTitle = () => {
  const {setParam, getParam} = useSearchParamsHandler();
  const  category = getParam("category") || "house-plants";
  const range_max = getParam("range_max") || 1000;
  const range_min = getParam("range_min") || 0;
  const type = getParam("type") || "all-plants";
  const sort = getParam("sort") || "default-sorting";
  const changed= (e: string)=>{
  setParam({sort:e})
  }
return(
  <div className="flex items-center justify-between mb-3">
    <div className="flex items-center gap-4 cursor-pointer">

      {products_title.map((value)=>(
        <h3 onClick={()=> 
          setParam
          ({category,
            range_min,
             range_max, 
              type: value.route_path})}
         className={`hover:text-main ${value.route_path === type && "text-main font-bold" }`}
          key={value.id}>{value.title}</h3>
      ))}
    </div>
    <div className="flex items-center gap-2">
      Short by:
      <Select
      onChange={changed}
        value={sort}
        style={{ width: 150 }}
        options={[
          { value: "default-sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The Cheapest" },
            { value: "most-expensive", label: "Most Expensive" },
        ]}
      />
    </div>
  </div>
)
}
export default ProductsTitle;