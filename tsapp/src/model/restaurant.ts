export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode?: number;
};

export type AddressWithoutZipCode = Omit<Address, "zipCode">;

export type RestaurantOnlyCategory = Pick<Restaurant, "category">;

export type Menu = { name: string; price: number; category: string };

export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type RestaurantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
