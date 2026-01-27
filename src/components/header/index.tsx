


import { useLocation,  Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import { Bell, Search } from 'lucide-react';
import Shop from "../../assets/img/Shop.png"
import { useReduxDispatch } from '../../hooks/useRedux';
import { setAuthorizationModalVisiblity } from '../../redux/modal-store';


const Header = () => {
    const {pathname} = useLocation();
    console.log(pathname)

    const dispatch =useReduxDispatch();


  return (
    <>
    <div className="py-5 border-b border-[#00800043]">
    <div className="w-[90%] mx-auto flex items-center justify-between">
       <img src={Logo} alt="" />


       <div className="flex items-center justify-center gap-10">
        <Link to={"/"} className={`${pathname === "/" && "text-main font-semibold"}`} >Home</Link>
        <Link to={"/blog"}  className={`${pathname === "/blog" && "text-main font-semibold"}`} >Blog</Link>
       </div>

       <div className="flex items-center gap-8">
        <Search />
        <Bell />
        <img src={Shop} alt="" />

        <button onClick={() => dispatch(setAuthorizationModalVisiblity())} className='bg-main rounded-lg font-medium text-white cursor-pointer p-[7px_25px]'>
            Login
        </button>
       </div>
    </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Header