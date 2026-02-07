
import { Input, Empty } from "antd";
import { useState, useEffect } from "react";
import useQueryHandler from "../../../hooks/useQueryHandler";
import BlogCard from "../card";
import type { BlogType, QueryType } from "../../../@types";
import { LoadingOutlined } from "@ant-design/icons";

const BlogSerch = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<BlogType[]>([]);
  
  const { data, isLoading, isError }: QueryType<BlogType[]> = useQueryHandler({
    url: "user/blog",
    pathname: "blog",
    params: { search: "" },
  });

  useEffect(() => {
    if (data) {
      setFiltered(
        data.filter(
          (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.short_description.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, data]);

  return (
    <div className="max-w-[90%] m-auto py-6 p-2 md:px-0">
      <Input.Search
        placeholder="Blog qidirish..."
        allowClear
        enterButton
        size="large"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {isLoading || isError ? (
          <div className="col-span-full flex justify-center p-2">
            <LoadingOutlined className="text-4xl md:text-5xl text-green-500" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="col-span-full flex justify-center p-2">
            <Empty description="Hech narsa topilmadi" />
          </div>
        ) : (
          filtered.map((value) => (
            <div key={value._id} className="w-full">
              <BlogCard {...value} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogSerch;