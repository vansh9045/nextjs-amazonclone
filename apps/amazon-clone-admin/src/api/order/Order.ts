import { Product } from "../product/Product";
import { JsonValue } from "type-fest";
import { AmazonDatumr } from "../amazonDatumr/AmazonDatumr";

export type Order = {
  createdAt: Date;
  id: string;
  payment: string | null;
  paymentStatus: boolean | null;
  price: number | null;
  products?: Array<Product>;
  status: JsonValue;
  updatedAt: Date;
  user?: AmazonDatumr | null;
};
