import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { AmazonDatumrWhereUniqueInput } from "../amazonDatumr/AmazonDatumrWhereUniqueInput";

export type ReviewCreateInput = {
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
  user?: AmazonDatumrWhereUniqueInput | null;
};
