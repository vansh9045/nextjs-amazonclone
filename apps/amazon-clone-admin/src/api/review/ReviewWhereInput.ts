import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { AmazonDatumrWhereUniqueInput } from "../amazonDatumr/AmazonDatumrWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  rating?: IntNullableFilter;
  user?: AmazonDatumrWhereUniqueInput;
};
