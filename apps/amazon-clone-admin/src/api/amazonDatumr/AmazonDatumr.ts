import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type AmazonDatumr = {
  createdAt: Date;
  id: string;
  isAdmin: boolean | null;
  orders?: Array<Order>;
  reviews?: Review | null;
  updatedAt: Date;
};
