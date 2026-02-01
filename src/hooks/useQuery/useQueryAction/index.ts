

import { useMutation } from '@tanstack/react-query'
import { useAxios } from '../../useAxios'
import { notificationApi } from '../../../generic/NotificationAPI';
import Cookies from "js-cookie";
import { setAuthorizationModalVisiblity } from '../../../redux/modal-store';
import { useReduxDispatch } from '../../useRedux';
import { getUser } from '../../../redux/user-slice';
import { signInWithGoogle } from '../../../config/Config';


export const useLoginMutation = () => {
  const notify = notificationApi();
    const axios = useAxios();
    const dispatch = useReduxDispatch();
    return useMutation({
        mutationKey: ["login"],
        mutationFn: (data: object) => axios({ url: "user/sign-in", method: "POST", body: data }),
        onSuccess: (data) => {
          notify("login");
            const { token, user } = data;

            Cookies.set("token", token);
            Cookies.set("user", JSON.stringify(user));
            dispatch(getUser(user));
            dispatch(setAuthorizationModalVisiblity());
        },
        onError(error: { status: number}){
          if (error.status === 409) {
            notify("409");
          }
        },
    });
};



export const useRegisterMutation = () => {
  const notify = notificationApi();
  const axios = useAxios();
  const dispatch = useReduxDispatch();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data: object) =>
      axios({ url: "user/sign-up", method: "POST", body: data }),
    onSuccess: (data) => {
      notify("register");
      const { token, user } = data;

      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(user));
      dispatch(getUser(user));
      dispatch(setAuthorizationModalVisiblity());
    },
    onError(error: { status: number }) {
      if (error.status === 409) {
        notify("409");
      }
    },
  });
};



export const useOnAuthGoogle = () => {
  const notify = notificationApi();
  const axios = useAxios();
  const dispatch = useReduxDispatch();

  return useMutation({
    mutationKey: ["sign-google"],
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios ({ url: "user/sign-in/google", method: "POST", body: {email:response.user.email},
      });
    },
    onSuccess: (data) => {
      notify("login");
      const { token, user } = data;

      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(user));
      dispatch(getUser(user));
      dispatch(setAuthorizationModalVisiblity());
    },
    onError: (error: { status: number}) => {
      if (error.status === 409) {
       return notify("409");
      }
      notify("error");
    }
  });
}

























// import { useMutation } from "@tanstack/react-query";
// import Cookies from "js-cookie";
// import { AxiosError } from "axios";

// import { useAxios } from "../../useAxios";
// import { notificationApi } from "../../../generic/NotificationAPI";
// import { useReduxDispatch } from "../../useRedux";
// import { setAuthorizationModalVisiblity } from "../../../redux/modal-store";
// import { getUser } from "../../../redux/user-slice";
// import { signInWithGoogle } from "../../../config/Config";

// /* =======================
//    COMMON SUCCESS HANDLER
// ======================= */
// const handleAuthSuccess = (
//   data: any,
//   dispatch: ReturnType<typeof useReduxDispatch>,
//   notify: (type: string) => void
// ) => {
//   const { token, user } = data;

//   Cookies.set("token", token);
//   Cookies.set("user", JSON.stringify(user));

//   dispatch(getUser(user));
//   dispatch(setAuthorizationModalVisiblity());

//   notify("login");
// };

// /* =======================
//    LOGIN
// ======================= */
// export const useLoginMutation = () => {
//   const axios = useAxios();
//   const notify = notificationApi();
//   const dispatch = useReduxDispatch();

//   return useMutation({
//     mutationKey: ["login"],
//     mutationFn: (data: object) =>
//       axios({
//         url: "user/sign-in",
//         method: "POST",
//         body: data,
//       }),

//     onSuccess: (data) => {
//       handleAuthSuccess(data, dispatch, notify);
//     },

//     onError: (error: AxiosError) => {
//       if (error.response?.status === 409) {
//         notify("409");
//       } else {
//         notify("error");
//       }
//     },
//   });
// };

// /* =======================
//    REGISTER
// ======================= */
// export const useRegisterMutation = () => {
//   const axios = useAxios();
//   const notify = notificationApi();
//   const dispatch = useReduxDispatch();

//   return useMutation({
//     mutationKey: ["register"],
//     mutationFn: (data: object) =>
//       axios({
//         url: "user/sign-up",
//         method: "POST",
//         body: data,
//       }),

//     onSuccess: (data) => {
//       handleAuthSuccess(data, dispatch, notify);
//       notify("register");
//     },

//     onError: (error: AxiosError) => {
//       if (error.response?.status === 409) {
//         notify("409");
//       } else {
//         notify("error");
//       }
//     },
//   });
// };

// /* =======================
//    GOOGLE AUTH
// ======================= */
// export const useOnAuthGoogle = () => {
//   const axios = useAxios();
//   const notify = notificationApi();
//   const dispatch = useReduxDispatch();

//   return useMutation({
//     mutationKey: ["sign-google"],

//     mutationFn: async () => {
//       const response = await signInWithGoogle();

//       return axios({
//         url: "user/sign-in/google",
//         method: "POST",
//         body: {
//           email: response.user.email,
//         },
//       });
//     },

//     onSuccess: (data) => {
//       handleAuthSuccess(data, dispatch, notify);
//     },

//     onError: (error: AxiosError) => {
//       if (error.response?.status === 409) {
//         notify("409");
//       } else {
//         notify("error");
//       }
//     },
//   });
// };
