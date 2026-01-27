import { Loader } from "lucide-react"
import { Form, Input } from "antd"
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useLoginMutation } from "../../../../../hooks/useQuery/useQueryAction";


const Login = () => {

const input_style : string = "h-[40px] mt-2 border-[#46A358]"

const icon_style : string = "border h-[40px] rounded-md flex items-center justiyf-center gap-3 mb-4 cursor-pointer"

const {mutate , isPending} = useLoginMutation()

const login = (e : {email:string , passowrd : string}) => {
mutate(e)
}


  return (
    <>
    
    <div className="w-4/5 m-auto">
     <div className="mt-5 mb-2">
      <p className="">Enter your email and password to login.</p>

       <Form onFinish={login}>
        <Form.Item
        name= "email"
        rules = {[
          {
            required : true,
            message : "Please input your email!"
          },
        ]} 
        
          >

          <Input 
          type = "email"
          placeholder = "almamun_uxui@outlook.com"
           className = {`${input_style}`}
           />

        </Form.Item>

         <Form.Item
         name= "password"
         rules = {[
          {
            required : true,
            message : "Please input your password!"
          },
         ]} 

           >

      
           <Input
           placeholder="*********"
           className={`${input_style}`}
           />

           </Form.Item>

           <p className="text-end mt-2 text-[#46A358] text-sm cursor-pointer">Forgot Password?</p>

              <button className="bg-[#46A358] w-full mt-4 text-white  h-[40px] rounded-md">
                {isPending? <Loader className="animate-spin"/>: "Login"  }
              </button>
               
       </Form>

       <div className="flex items-center justify-center mt-5 mb-5 gap-4">
        <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
        <p className="w-[40%] text-[#3D3D3D] text-[13px]">Or login with</p>
        <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
       </div>

          
          <div className={`${icon_style}`  }>
              <FcGoogle size={24} className="ml-20"/>
            <p>Login with Google</p>
          </div>

           

             <div className={`${icon_style}`}>
                <BsFacebook size={22} className="text-[#46A] ml-20" />
                   
            <p>Login with Facebook</p>
          </div>


     </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Login