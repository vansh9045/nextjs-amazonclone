import { OrderUpdateManyWithoutAmazonDatumrsInput } from "./OrderUpdateManyWithoutAmazonDatumrsInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type AmazonDatumrUpdateInput = {
  isAdmin?: boolean | null;
  orders?: OrderUpdateManyWithoutAmazonDatumrsInput;
  reviews?: ReviewWhereUniqueInput | null;
};
