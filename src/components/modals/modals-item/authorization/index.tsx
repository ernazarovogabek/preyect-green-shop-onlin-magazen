
import { Modal } from "antd"
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux"
import { setAuthorizationModalVisiblity } from "../../../../redux/modal-store";
import { useState } from "react";
import Register from "./register";
import Login from "./login";



const AuthorizationModal = () => {

const {authorizationModalVisiblity} = useReduxSelector((stata) => stata.modalSlice)

const dispatch = useReduxDispatch();

const [state , setState] = useState<string>("login")

  return (
    <>
    
    <Modal open={authorizationModalVisiblity} footer={false} onCancel={()=> dispatch(setAuthorizationModalVisiblity() )}>
       

       <div className="mt-10">
        <div className="flex items-center justify-center gap-6">
            <div onClick={() => setState("login")} className={`text-xl cursor-pointer ${state === "login" && "text-main"}`}>Login</div>
            <div className="bg-[#3D3D3D] w-[1px] h-5"></div>
            <div  onClick={() => setState("register")} className={`text-xl cursor-pointer ${state === "register" && "text-main"}`}>Register</div>
        </div>

          {state === "login" ? <Login /> : <Register />}




       </div>


    </Modal>
    
    </>
  )
}

export default AuthorizationModal