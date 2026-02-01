import { useNavigate, useParams } from "react-router-dom";
import useQueryHandler from "../../../hooks/useQueryHandler";
import { Skeleton, Tooltip } from "antd";
import type { AuthUser, BlogType } from "../../../@types";

import {
  EyeOutlined,
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { cookieInfo } from "../../../generic/cookies";
import useLoader from "../../../generic/loader";

const Rendering = () => {
  const navigate = useNavigate();
  const { created_by, id } = useParams();
  const { getCookie } = cookieInfo();
  const authUser = getCookie("user") as AuthUser;
  const {
    data: userData,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useQueryHandler({
    url: `/user/by_id/${created_by}`,
    pathname: `user-${created_by}`,
  });
  const { data, isLoading, isError } = useQueryHandler({
    url: `/user/blog/${id}`,
    pathname: `blog-${id}`,
  });
  const { blog_id_loading } = useLoader();
  const dataLoading = isLoading || isError;

  if (dataLoading) {
    return (
      <section className="w-[80%] m-auto">
        {blog_id_loading()}
      </section>
    );
  }
  if (!data) {
    return (
      <section className="w-[80%] m-auto text-center text-red-500 py-10">
        Blog topilmadi yoki xatolik yuz berdi!
      </section>
    );
  }

  return (
    <div className="w-[80%] m-auto py-[50px]">
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center gap-4">
          {userData ? (
            <>
              <Tooltip title={`${userData.name} ${userData.surname || ""}`}>
                <img
                  src={userData.profile_photo}
                  className="w-[50px] h-[50px] rounded-full cursor-pointer"
                  alt="User"
                  onClick={() => navigate(`/user/${userData._id}`)}
                />
              </Tooltip>
              <div>
                <h2 className="font-bold text-[18px]">
                  {userData.name} {userData.surname ?? ""}
                </h2>
                <p className="text-[12px]">
                  Followers {userData?.followers?.length || 0}
                </p>
              </div>
            </>
          ) : (
            <div>
              <div className="w-[50px] h-[50px] rounded-full bg-gray-200 flex items-center justify-center text-gray-400">?</div>
              <div>
                <h3 className="font-semibold">User topilmadi</h3>
              </div>
            </div>
          )}
        </div>
        {authUser?._id === String(created_by) && (
          <button className="bg-gray-400 text-white px-4 py-2 rounded-md">
            You
          </button>
        )}
      </div>
      <div>
        <h2 className="py-[20px] font-bold text-[24px]">{data?.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: data?.content || "" }}
        ></div>
      </div>
      <div className="flex items-center gap-4 mt-6 text-[15px] text-gray-700">
        <div className="flex items-center gap-1">
          <EyeOutlined /> <p>{data?.views}</p>
        </div>
        <div className="flex items-center gap-1">
          <HeartOutlined /> <p>0</p>
        </div>
        <div className="flex items-center gap-1">
          <MessageOutlined /> <p>0</p>
        </div>
        <div className="flex items-center gap-1">
          <ShareAltOutlined /> <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Rendering;