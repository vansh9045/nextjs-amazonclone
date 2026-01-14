import { Product } from "../product/Product";
import { AmazonDatumr } from "../amazonDatumr/AmazonDatumr";

export type Review = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  rating: number | null;
  updatedAt: Date;
  user?: AmazonDatumr | null;
};
