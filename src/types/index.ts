export type Menues = {
  id: number;
  image: string;
  name: string;
  price: number;
};

export type MenuItem = Menues & {
  quantity: number;
};

export type Order = {
  id: number;
  orders: MenuItem[];
};
