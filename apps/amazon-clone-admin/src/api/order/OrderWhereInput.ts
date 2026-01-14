import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { AmazonDatumrWhereUniqueInput } from "../amazonDatumr/AmazonDatumrWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  payment?: StringNullableFilter;
  paymentStatus?: BooleanNullableFilter;
  price?: FloatNullableFilter;
  products?: ProductListRelationFilter;
  status?: JsonFilter;
  user?: AmazonDatumrWhereUniqueInput;
};
