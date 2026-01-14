import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";
import { AmazonDatumrWhereUniqueInput } from "../amazonDatumr/AmazonDatumrWhereUniqueInput";

export type OrderUpdateInput = {
  payment?: string | null;
  paymentStatus?: boolean | null;
  price?: number | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  status?: InputJsonValue;
  user?: AmazonDatumrWhereUniqueInput | null;
};
