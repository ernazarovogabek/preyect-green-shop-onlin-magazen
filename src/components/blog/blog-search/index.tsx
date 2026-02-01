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
    <div className="my-6">
      <Input.Search
        placeholder="Blog qidirish..."
        allowClear
        enterButton
        size="large"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full"
      />
      <div className="grid grid-cols-3 gap-5 my-5">
        {isLoading || isError ? (
          <div className="col-span-3 flex justify-center"><span><LoadingOutlined className="text-5xl text-green-500" /></span></div>
        ) : filtered.length === 0 ? (
          <div className="col-span-3 flex justify-center"><Empty description="Hech narsa topilmadi" /></div>
        ) : (
          filtered.map((value) => <BlogCard key={value._id} {...value} />)
        )}
      </div>
    </div>
  );
};

export default BlogSerch;
