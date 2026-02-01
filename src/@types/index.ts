



// export interface AuthUser {
//   _id: string;
//   first_name: string;
//   last_name: string;
//   email: string;

//   // 📍 Address info
//   country?: string;
//   town?: string;
//   street_address?: string;
//   additional_street_address?: string;
//   state?: string;
//   zip?: string;

//   // 🔐 Auth
//   token?: string;
//   role?: "user" | "admin";

//   // 🕒 Meta
//   createdAt?: string;
//   updatedAt?: string;
// }





// export interface AuthType {
//   billing_address: {
//     country: string;
//     town: string;
//     street_address: string;
//     extra_address: string;
//     state: string;
//     zip: string;
//   };
//   create_account_limit: number;
//   create_plant_limit: number;
//   create_post_limit: number;
//   created_at: string;
//   created_by: string;
//   email: string;
//   followers: string[];
//   hashtags: string[];
//   name: string;
//   order_list: string[];
//   password: string;
//   permission: {
//     create: boolean;
//     update: boolean;
//     delete: boolean;
//     read: boolean;
//   };
//   phone_number: string;
//   profile_photo: string;
//   surname: string;
//   user_type: string;
//   username: string;
//   wishlist: string[];
//   _id: string;
// }

// export interface RegisterType {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
//   confirm_password: string;
// }

// export interface CategoryType {
//   count: number;
//   created_at: string;
//   created_by: string;
//   route_path: string;
//   title: string;
//   _id: string;
// }

// export interface QueryType<T> {
//   isLoading: boolean;
//   isError: boolean;
//   data?: T;
// }

// export interface DiscountFlowerType {
//   discoount_up_to: number;
//   id: number;
//   poster_image_url: string;
//   title: string;
// }




// export interface HeroMockType{
// id:number;
// title: string;
// subTitle: string;
// description: string;
// buttonText: string;
// big_img_url: string;
// small_img_url: string;
// }






// export interface ProductType {
//   _id: string;
//   title: string;
//   price: number;
//   main_image: string;
//   discount: boolean;
//   discount_price?: number;
//   short_description: string;
//   description: string;
//   detailed_images: string[];
//   rate: number;
//   views: number;
//   tags: [];
//   comments: [];
//   sold_items: number;
//   created_by: string;
//   created_at: string;
//   category: string;
//   count?: number | undefined;
//   userPrice?: number;
// }

// export interface ProductsTitleType {
//   id: number;
//   title: string;
//   route_path: string;
// }

// export interface ShopCartType extends ProductType {
//   counter: number;
//   userPrice: number;
// }

// export interface BlogType {
//   _id: string;
//   title: string;
//   short_description: string;
//   content: string;
//   created_by: string;
//   created_at: string;
//   reaction_length: number;
//   views?: number;
// }













































export interface AuthType {
  billing_address: {
    country: string;
    town: string;
    street_address: string;
    extra_address: string;
    state: string;
    zip: string;
  };
  create_account_limit: number;
  create_plant_limit: number;
  create_post_limit: number;
  created_at: string;
  created_by: string;
  email: string;
  followers: string[];
  hashtags: string[];
  name: string;
  order_list: string[];
  password: string;
  permission: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: string[];
  _id: string;
}

export interface RegisterType {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirm_password: string;
}
export interface LoginResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

export interface LoginValues {
  email: string;
  password: string;
}

export interface HeroMockType{
id:number;
title: string;
subTitle: string;
description: string;
buttonText: string;
big_img_url: string;
small_img_url: string;
}

export  interface CategoryType{
  count: number;
  created_at: string;
  created_by:string;
  route_path:string;
  title:string;
  _id:string;
}

export interface QueryType<T>{
  isLoading: boolean;
  isError: boolean;
  data?:T;
}
export interface DiscountFlowerType {
  discoount_up_to: number;
  id: number;
  poster_image_url: string;
  title: string;
}
export interface ProductType {
  _id: string;
  title: string;
  price: number;
  main_image: string;
  discount: boolean;
  discount_price?: number;
  short_description: string;
  description: string;
  detailed_images: string[];
  rate: number;
  views: number;
  tags: [];
  comments: [];
  sold_items: number;
  created_by: string;
  created_at: string;
  category: string;
  count?: number | undefined;
  userPrice?: number;
}

export interface ShopCartType extends ProductType {
    counter: number;
    userPrice: number;
}
export interface ProductsTitleType {
  id: number;
  title: string;
  route_path: string;
}
export interface ShopCartType extends ProductType {
  counter: number;
  userPrice: number;
}
export type UploadType = {
  file: {
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    originalFileObj: typeof File;
    response: {
      message: string;
      image_url: {
        api_key: string;
        asset_id: string;
        bytes: number;
        created_at: string;
        etag: string;
        folder: string;
        format:
          | "jpg"
          | "svg"
          | "jpag"
          | "jpeg"
          | "gif"
          | "png"
          | "eps"
          | "raw"
          | "cr2"
          | "nef"
          | "orf"
          | "sr2";
        height: number;
        width: number;
        original_extension: string;
        original_filename: string;
        placeholder: boolean;
        public_id: string;
        resource_type: "image" | "video" | "images" | "videos";
        secure_url: string;
        signature: string;
        tags: string[];
        type: "upload" | "pre-upload";
        url: string;
        version: number;
        version_id: string;
      };
    };
    size: number;
    percent: number;
    status: "done" | "failed";
    thumbUrl: string;
    type: string;
    uid: string;
    xhr: typeof XMLHttpRequest;
  };
};
export interface UserType {
  billing_address: {
    country?: string;
    town?: string;
    street_address?: string;
    additional_street_address?: string;
    state?: string;
    zip?: string;
  };
  create_account_limit: number;
  create_plant_limit: number;
  create_post_limit: number;
  created_at: string;
  created_by: string;
  email: string;
  followers: string[];
  hashtags: string[];
  name: string;
  order_list: string[];
  password: string;
  permission: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: string[];
  _id: string;
}
export interface AuthUser {
  _id?: string;
  email?: string;
  name?: string;
  surname?: string;
  profile_photo?: string;
  create_account_limit?: number;
  phone_number?: string;
 
  username?: string;
  country?: string;
  town?: string;
  street_address?: string;
  additional_street_address?: string;
  state?: string;
  zip?: string;
  followers?: string[];
  permission?: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
}
export interface BlogType {
  _id: string;
  title: string;
  description: string;
  viewCount: number;
  commentCount: number;
  likeCount: number;
  content: string;
  createdAt?: string;
}

export interface UserState {
  isAuthenticated: boolean;
  name?: string;
  avatar?: string;
}