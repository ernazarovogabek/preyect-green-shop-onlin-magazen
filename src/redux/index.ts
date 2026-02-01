 import { configureStore } from "@reduxjs/toolkit"
 import  modalSlice  from "./modal-store";
 import shopSlice from "./shopp/shop-slice";
import  userSlice  from "./user-slice";




 export const store = configureStore ({
     reducer : {
         modalSlice,
         shopSlice,
         userSlice,
         
     } ,
 });




   export type RootStore = ReturnType<typeof store.getState>
   export type DispatchType = typeof store.dispatch




