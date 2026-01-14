import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type AmazonDatumrWhereInput = {
  id?: StringFilter;
  isAdmin?: BooleanNullableFilter;
  orders?: OrderListRelationFilter;
  reviews?: ReviewWhereUniqueInput;
};
