import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "payment";

export const OrderTitle = (record: TOrder): string => {
  return record.payment?.toString() || String(record.id);
};
