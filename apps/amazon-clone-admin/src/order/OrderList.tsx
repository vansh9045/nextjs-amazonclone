import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { AMAZONDATUMR_TITLE_FIELD } from "../amazonDatumr/AmazonDatumrTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"orders"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="payment" source="payment" />
        <BooleanField label="payment status" source="paymentStatus" />
        <TextField label="price" source="price" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="user"
          source="amazondatumr.id"
          reference="AmazonDatumr"
        >
          <TextField source={AMAZONDATUMR_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
