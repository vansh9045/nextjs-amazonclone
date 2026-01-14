import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";
import { AmazonDatumrWhereUniqueInput } from "../amazonDatumr/AmazonDatumrWhereUniqueInput";

export type OrderCreateInput = {
  payment?: string | null;
  paymentStatus?: boolean | null;
  price?: number | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  status?: InputJsonValue;
  user?: AmazonDatumrWhereUniqueInput | null;
};
