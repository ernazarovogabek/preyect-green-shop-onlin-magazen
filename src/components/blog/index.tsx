import { cookieInfo } from "../../generic/cookies";
import BlogSerch from "./blog-search";
import BlogHeader from "./blog-header";

const BlogComponent = () => {
  const { isAuthorization } = cookieInfo();

  return (
    <section className="w-[90%] m-auto">
      {isAuthorization ? <BlogSerch /> : <BlogHeader />}
    </section>
  );
};

export default BlogComponent;
