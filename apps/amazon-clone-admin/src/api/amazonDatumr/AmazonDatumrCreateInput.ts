import { OrderCreateNestedManyWithoutAmazonDatumrsInput } from "./OrderCreateNestedManyWithoutAmazonDatumrsInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type AmazonDatumrCreateInput = {
  isAdmin?: boolean | null;
  orders?: OrderCreateNestedManyWithoutAmazonDatumrsInput;
  reviews?: ReviewWhereUniqueInput | null;
};
