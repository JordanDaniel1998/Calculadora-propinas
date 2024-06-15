export type Menues = {
  id: number;
  name: string;
  price: number;
};

export type MenuItem = Menues & {
  quantity: number;
};
