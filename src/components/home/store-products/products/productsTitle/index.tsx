
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";
import { title_category } from "../../../../../utils";
import { Select } from "antd";

const ProductsTitle = () => {
  const { setParam, getParam } = useSearchParamsHandler();
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const category = getParam("category") || "house-plants";
  
  const handleChange = (value: string) => {
    setParam({ category, range_min, range_max, sort: value, type });
  };
  
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      {/* Categories - Mobil: to'liq kenglik */}
      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto cursor-pointer">
        {title_category.map((value) => (
          <h3
            className={`text-[14px] md:text-base ${type === value.label && "text-[#45a358] underline font-medium"}`}
            onClick={() =>
              setParam({
                category,
                range_min,
                range_max,
                sort,
                type: value.label,
              })
            }
            key={value.id}
          >
            {value.title}
          </h3>
        ))}
      </div>

      {/* Sort - Mobil: to'liq kenglik */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full md:w-auto">
        <span className="text-[14px] md:text-base whitespace-nowrap">Short by:</span>
        <Select
          defaultValue={sort}
          style={{ width: '100%', maxWidth: 200 }}
          onChange={handleChange}
          options={[
            { value: "default-sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The Cheapest" },
            { value: "most-expensive", label: "Most Expansive" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductsTitle;