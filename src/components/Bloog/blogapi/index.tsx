

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye, MessageCircle, Heart, Loader, ArrowLeft, Calendar, User, Search as SearchIcon, ArrowRight, Leaf } from "lucide-react";
import { Input, Skeleton, Empty, Tag, Modal, Form, message, Button } from "antd";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

// ---------------------------------------------------------
// 1. LOGIN COMPONENT
// ---------------------------------------------------------

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const input_style: string = "h-[45px] mt-2 border-gray-200 hover:border-[#46A358] focus:border-[#46A358] rounded-lg bg-gray-50 focus:bg-white transition-all";
  const icon_style: string = "border h-[45px] rounded-lg flex items-center justify-center gap-3 mb-4 cursor-pointer hover:bg-gray-50 transition-colors border-gray-200";
  
  const [loading, setLoading] = useState(false);

  const onFinish = (values: { email: string; passowrd: string }) => {
     console.log("Kiritilgan ma'lumotlar:", values); 
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Muvaffaqiyatli tizimga kirdingiz!");
      onLoginSuccess(); 
    }, 1500);
  };



  return (
    <div className="w-full px-6 py-4">
      <div className="mb-2">
        <p className="text-gray-500 mb-8 text-center">Tizimga kirish uchun ma'lumotlaringizni kiriting.</p>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item name="email" rules={[{ required: true, message: "Email kiritish majburiy!" }]}>
            <Input type="email" placeholder="mail@example.com" className={input_style} />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Parol kiritish majburiy!" }]}>
            <Input.Password placeholder="*********" className={input_style} style={{ padding: '4px 11px' }} />
          </Form.Item>
          <p className="text-end mt-2 text-[#46A358] text-sm cursor-pointer hover:underline font-medium">Parolni unutdingizmi?</p>
          <button type="submit" disabled={loading} className="bg-[#46A358] w-full mt-8 text-white h-[50px] font-bold rounded-lg flex items-center justify-center hover:bg-[#3c8c4b] active:scale-[0.98] transition-all shadow-lg shadow-[#46A358]/30">
            {loading ? <Loader className="animate-spin" /> : "Kirish"}
          </button>
        </Form>
        
        <div className="relative flex py-8 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Yoki</span>
            <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <div className={icon_style}><FcGoogle size={24} /><p className="text-gray-600 font-medium">Google orqali kirish</p></div>
        <div className={icon_style}><BsFacebook size={22} className="text-[#1877F2]" /><p className="text-gray-600 font-medium">Facebook orqali kirish</p></div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// 2. BLOG DETAIL COMPONENT
// ---------------------------------------------------------

interface BlogDetailProps {
  blog: BlogType;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog, onBack }) => {
  return (
    <div className="animate-fade-in pb-20 max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-500 hover:text-[#46A358] transition-colors font-medium px-4 py-2 rounded-full hover:bg-white hover:shadow-sm"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Orqaga qaytish
        </button>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
        {/* Header */}
        <div className="mb-10 text-center">
           <div className="inline-flex items-center gap-3 mb-6 bg-green-50 px-4 py-2 rounded-full">
              <span className="text-[#46A358] font-bold text-sm tracking-wide uppercase">GreenShop Blog</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <Calendar size={14}/> {new Date().toLocaleDateString()}
              </span>
           </div>
           
           <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
             {blog.title}
           </h1>

           <div className="flex justify-center items-center gap-8 text-gray-500 text-sm border-t border-b border-gray-100 py-6">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-[#46A358]/10 flex items-center justify-center text-[#46A358]">
                    <User size={16} />
                 </div>
                 <span className="font-medium text-gray-700">Admin</span>
              </div>
              <div className="flex items-center gap-6">
                 <span className="flex items-center gap-1.5"><Eye size={16}/> {blog.viewCount}</span>
                 <span className="flex items-center gap-1.5"><MessageCircle size={16}/> {blog.commentCount}</span>
                 <span className="flex items-center gap-1.5"><Heart size={16} className="text-red-500"/> {blog.likeCount}</span>
              </div>
           </div>
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-800 prose-headings:font-bold prose-a:text-[#46A358] prose-img:rounded-3xl prose-p:leading-8"
          dangerouslySetInnerHTML={{ __html: blog.content || blog.description }} 
        />
        
        {/* Footer */}
        <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
             <span className="font-bold text-gray-900 text-lg">Maqola foydali bo'ldimi?</span>
             <div className="flex gap-4">
                <Button size="large" icon={<Heart size={18} />} className="flex items-center rounded-xl border-gray-200 hover:text-red-500 hover:border-red-500">Like</Button>
                <Button size="large" type="primary" className="bg-[#46A358] hover:bg-[#3c8c4b] rounded-xl px-8 shadow-lg shadow-[#46A358]/30 border-none">Ulashish</Button>
             </div>
        </div>
      </div>
    </div>
  );
}


// ---------------------------------------------------------
// 3. MAIN BLOGS COMPONENT
// ---------------------------------------------------------

interface BlogType {
  _id: string;
  title: string;
  description: string;
  viewCount: number;
  commentCount: number;
  likeCount: number;
  content: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);

  // Helper functions
  const stripHtml = (html: string): string => html.replace(/<[^>]*>?/gm, "");
  const truncateText = (text: string, length: number = 120): string =>
    text.length > length ? text.substring(0, length) + "..." : text;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://beckend-n14-soqt.vercel.app/api/user/blog",
          {
            params: { access_token: "64bebc1e2c6d3f056a8c85b7", search: "" },
          }
        );
        const data = response.data.data || [];
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error("Xatolik:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const results = blogs.filter(
      (blog) =>
        blog.title?.toLowerCase().includes(value.toLowerCase()) ||
        blog.description?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBlogs(results);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); 
    setIsModalOpen(false);    
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen pb-24 font-sans">
      
      {/* ----------------- LOGIN MODAL ----------------- */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        width={420}
        destroyOnClose
        className="rounded-[30px] overflow-hidden"
      >
        <div className="text-center pt-6 mb-2">
            <div className="w-12 h-12 bg-[#46A358]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#46A358]">
                <User size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Xush kelibsiz!</h2>
        </div>
        <Login onLoginSuccess={handleLoginSuccess} />
      </Modal>

      {/* ----------------- 1-QISM: UNAUTHENTICATED HERO ----------------- */}
      {!isAuthenticated && (
        <div className="w-[90%] max-w-[1200px] mx-auto pt-10 fade-in">
          <div className="w-full rounded-[40px] p-[30px] md:p-[50px] bg-white shadow-sm border border-gray-100 flex justify-between h-[150px] md:h-[200px] lg:h-[300px] items-center overflow-hidden relative">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#46A358]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <img src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_1.png?alt=media&token=8174091c-24b5-42a0-886d-845bd15cccb9" className="w-[15%] h-auto object-contain self-start relative z-10" alt="blog1" />
             <img className="w-[15%] h-auto object-contain mt-[20px] relative z-10" src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_2.png?alt=media&token=d2b8bf6f-7c67-4e93-b026-917f4291d9f6" alt="blog2" />
             <img className="w-[15%] h-auto object-contain mt-[50px] relative z-10" src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_3.png?alt=media&token=7abda4b5-0f9e-4fc1-8353-e32194b925c9" alt="blog3" />
             <img className="w-[15%] h-auto object-contain mt-[20px] relative z-10" src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_4.png?alt=media&token=2a9f4b03-30a0-4c89-b189-7c8835ab42e7" alt="blog4" />
             <img className="w-[15%] h-auto object-contain self-start relative z-10" src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_5.png?alt=media&token=f65d9df1-ea8b-4ebe-9d23-e3e768f0f701" alt="blog5" />
          </div>

          <div className="text-center mt-16 mb-20">
            <h1 className="font-black text-4xl md:text-5xl lg:text-[64px] leading-tight text-gray-900 tracking-tight">
              Monetize your content with <span className="text-[#46A358] relative inline-block">
                GreenShop
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#46A358] opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              Greenshop - a platform for buying and selling, publishing and monetizing
              all types of flowers, articles, and media content.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#46A358] hover:bg-[#3c8c4b] text-white font-bold text-lg py-4 px-10 rounded-2xl mt-10 transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(70,163,88,0.5)] hover:-translate-y-1"
            >
              Join GreenShop
            </button>
          </div>
        </div>
      )}

      {/* ----------------- 2-QISM: AUTHENTICATED CONTENT ----------------- */}
      {isAuthenticated && (
        <div className="w-[90%] max-w-[1200px] mx-auto pt-12 animate-fade-in">
          
          {selectedBlog ? (
             <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
          ) : (
          <>
            <div className="text-center mb-12">
               <h2 className="text-4xl font-black text-gray-800 mb-3">Bloglar va Yangiliklar</h2>
               <p className="text-gray-500 text-lg">O'simliklar dunyosiga oid eng so'nggi maqolalar</p>
            </div>

            {/* NEW SEARCH DESIGN */}
            <div className="max-w-2xl mx-auto mb-16 relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#46A358] to-green-300 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-white rounded-2xl shadow-xl flex items-center p-2">
                    <div className="pl-4 text-gray-400">
                        <SearchIcon size={22} />
                    </div>
                    <input 
                        type="text"
                        onChange={onSearch}
                        placeholder="Qidirish uchun yozing..."
                        className="w-full h-12 px-4 text-gray-700 bg-transparent outline-none text-lg placeholder:text-gray-400"
                    />
                    <button className="bg-[#46A358] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#3c8c4b] transition-colors shadow-md">
                        Qidirish
                    </button>
                </div>
            </div>

            {/* NEW BLOG GRID DESIGN */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                Array.from({ length: 9 }).map((_, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-[350px]">
                    <Skeleton active paragraph={{ rows: 6 }} />
                  </div>
                ))
              ) : filteredBlogs.length === 0 ? (
                <div className="col-span-full py-20 text-center">
                  <Empty description={<span className="text-gray-500 text-lg">Hech qanday maqola topilmadi</span>} />
                </div>
              ) : (
                filteredBlogs.map((blog) => (
                  <article
                    key={blog._id}
                    onClick={() => setSelectedBlog(blog)}
                    className="group relative bg-white rounded-[24px] overflow-hidden cursor-pointer h-[320px] flex flex-col transition-all duration-300 hover:-translate-y-2 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(70,163,88,0.15)] border border-transparent hover:border-[#46A358]/20"
                  >
                    {/* Decorative Background Icon */}
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none text-[#46A358]">
                        <Leaf size={120} />
                    </div>

                    {/* Left Accent Border */}
                    <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#46A358] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="p-8 flex flex-col h-full relative z-10">
                        <div className="flex justify-between items-start mb-4">
                             <Tag className="m-0 bg-green-50 text-[#46A358] border-none px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg">
                                Maqola
                             </Tag>
                             <span className="text-xs text-gray-400 font-medium">
                                {new Date().toLocaleDateString()}
                             </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 leading-tight group-hover:text-[#46A358] transition-colors">
                            {blog.title}
                        </h3>

                        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                            {truncateText(stripHtml(blog.content || blog.description), 110)}
                        </p>

                        <div className="mt-auto pt-5 border-t border-gray-50 flex justify-between items-center text-gray-400 text-xs font-medium">
                            <div className="flex gap-4">
                                <span className="flex items-center gap-1.5"><Eye size={14} className="group-hover:text-[#46A358] transition-colors"/> {blog.viewCount}</span>
                                <span className="flex items-center gap-1.5"><Heart size={14} className="group-hover:text-red-500 transition-colors"/> {blog.likeCount}</span>
                            </div>
                            
                            <span className="flex items-center gap-1 text-[#46A358] font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                O'qish <ArrowRight size={14} />
                            </span>
                        </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </>
          )}

        </div>
      )}

    </div>
  );
};

export default Blogs;