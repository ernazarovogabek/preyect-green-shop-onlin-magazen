import { useReduxSelector } from "../../hooks/useRedux"
import AuthorizationModal from "./modals-item/authorization"




const Modals = () => {

    
    const {authorizationModalVisiblity} = useReduxSelector((stata) => stata.modalSlice)

  return (
    <>
     
   { authorizationModalVisiblity && <AuthorizationModal />}
    
    </>
  )
}

export default Modals



















