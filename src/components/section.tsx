// import type { FC } from "react";

// import B1 from "../assets/img/blog1.png";
// import B2 from "../assets/img/blog2.png";
// import B3 from "../assets/img/blog3.png";
// import B4 from "../assets/img/blog4.png";

// interface BlogType {
//   id: number;
//   image: string;
//   date: string;
//   readTime: string;
//   title: string;
//   description: string;
// }

// const blogs: BlogType[] = [
//   {
//     id: 1,
//     image: B1,
//     date: "September 12",
//     readTime: "Read in 6 minutes",
//     title: "Cactus & Succulent Care Tips",
//     description:
//       "Cacti are succulents are easy care plants for any home or patio.",
//   },
//   {
//     id: 2,
//     image: B2,
//     date: "September 13",
//     readTime: "Read in 2 minutes",
//     title: "Top 10 Succulents for Your Home",
//     description:
//       "Best in hanging baskets. Prefers medium to high light.",
//   },
//   {
//     id: 3,
//     image: B3,
//     date: "September 15",
//     readTime: "Read in 3 minutes",
//     title: "Cacti & Succulent Care Tips",
//     description:
//       "Cacti and succulents thrive in containers and because most are...",
//   },
//   {
//     id: 4,
//     image: B4,
//     date: "September 15",
//     readTime: "Read in 2 minutes",
//     title: "Best Houseplants Room By Room",
//     description:
//       "The benefits of houseplants are endless. In addition to...",
//   },
// ];

// const Section: FC = () => {
//   return (
//     <section className="w-[90%] mx-auto my-16">
//       {/* HEADER */}
//       <div className="text-center mb-12">
//         <h2 className="text-[#3D3D3D] text-2xl sm:text-3xl font-bold mb-3">
//           Our Blog Posts
//         </h2>
//         <p className="text-[#727272] text-sm sm:text-base max-w-[500px] mx-auto">
//           We are an online plant shop offering a wide range of cheap and trendy
//           plants.
//         </p>
//       </div>

//       {/* BLOG GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
//           >
//             {/* IMAGE */}
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full h-[200px] object-cover"
//             />

//             {/* CONTENT */}
//             <div className="p-4">
//               <p className="text-main text-xs font-medium mb-2">
//                 {blog.date} | {blog.readTime}
//               </p>

//               <h3 className="text-[#3D3D3D] font-bold text-[16px] mb-2 leading-snug">
//                 {blog.title}
//               </h3>

//               <p className="text-[#727272] text-sm mb-4">
//                 {blog.description}
//               </p>

//               <button className="text-sm font-medium text-[#3D3D3D] hover:text-main transition flex items-center gap-1">
//                 Read More <span>→</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Section;



























import type { FC } from "react";

import B1 from "../assets/img/B1.png"
import B2 from "../assets/img/B2.png"
import B3 from "../assets/img/B3.png"
import B4 from "../assets/img/B4.png"

const Section: FC = () => {
  return (
    <section className="w-[90%] mx-auto my-16">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-[#3D3D3D] text-2xl sm:text-3xl font-bold mb-3">
          Our Blog Posts
        </h2>
        <p className="text-[#727272] text-sm sm:text-base max-w-[500px] mx-auto">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* BLOG 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
          <img src={B1} alt="Blog 1" className="w-full h-[200px] object-cover" />
          <div className="p-4">
            <p className="text-main text-xs font-medium mb-2">
              September 12 | Read in 6 minutes
            </p>
            <h3 className="text-[#3D3D3D] font-bold text-[16px] mb-2">
              Cactus & Succulent Care Tips
            </h3>
            <p className="text-[#727272] text-sm mb-4">
              Cacti are succulents are easy care plants for any home or patio.
            </p>
            <button className="text-sm font-medium hover:text-main transition">
              Read More →
            </button>
          </div>
        </div>

        {/* BLOG 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
          <img src={B2} alt="Blog 2" className="w-full h-[200px] object-cover" />
          <div className="p-4">
            <p className="text-main text-xs font-medium mb-2">
              September 13 | Read in 2 minutes
            </p>
            <h3 className="text-[#3D3D3D] font-bold text-[16px] mb-2">
              Top 10 Succulents for Your Home
            </h3>
            <p className="text-[#727272] text-sm mb-4">
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <button className="text-sm font-medium hover:text-main transition">
              Read More →
            </button>
          </div>
        </div>

        {/* BLOG 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
          <img src={B3} alt="Blog 3" className="w-full h-[200px] object-cover" />
          <div className="p-4">
            <p className="text-main text-xs font-medium mb-2">
              September 15 | Read in 3 minutes
            </p>
            <h3 className="text-[#3D3D3D] font-bold text-[16px] mb-2">
              Cacti & Succulent Care Tips
            </h3>
            <p className="text-[#727272] text-sm mb-4">
              Cacti and succulents thrive in containers and because most are...
            </p>
            <button className="text-sm font-medium hover:text-main transition">
              Read More →
            </button>
          </div>
        </div>

        {/* BLOG 4 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
          <img src={B4} alt="Blog 4" className="w-full h-[200px] object-cover" />
          <div className="p-4">
            <p className="text-main text-xs font-medium mb-2">
              September 15 | Read in 2 minutes
            </p>
            <h3 className="text-[#3D3D3D] font-bold text-[16px] mb-2">
              Best Houseplants Room By Room
            </h3>
            <p className="text-[#727272] text-sm mb-4">
              The benefits of houseplants are endless. In addition to...
            </p>
            <button className="text-sm font-medium hover:text-main transition">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
