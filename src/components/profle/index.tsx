import { Outlet } from "react-router-dom";
import ProfileDashboard from "./profile-dashboard";

const Profle = () => {
  return (
    <div className="max-w-[90%] m-auto flex gap-6">
      <ProfileDashboard />

      <div className="w-full mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Profle;



























