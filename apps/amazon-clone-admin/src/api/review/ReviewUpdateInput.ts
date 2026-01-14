import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { AmazonDatumrWhereUniqueInput } from "../amazonDatumr/AmazonDatumrWhereUniqueInput";

export type ReviewUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
  user?: AmazonDatumrWhereUniqueInput | null;
};
