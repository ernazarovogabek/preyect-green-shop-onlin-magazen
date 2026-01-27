 import { useMutation } from "@tanstack/react-query"
 import { useAxios } from "../../useAxios"






 export const useLoginMutation =() => {
     const axios = useAxios();
     return useMutation({
         mutationKey : ["login"],
         mutationFn :(data: object) => axios({ url:"user/sign-in", method : "POST" , body : data}),

         onSuccess(data) {
             console.log(data);
         }
     })
 }





