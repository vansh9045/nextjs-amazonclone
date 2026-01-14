import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { AMAZONDATUMR_TITLE_FIELD } from "../amazonDatumr/AmazonDatumrTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        </ReferenceField>
        <ReferenceManyField
          reference="Product"
          target="orderId"
          label="products"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="colors" source="colors" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="discounted price" source="discountedPrice" />
            <TextField label="ID" source="id" />
            <TextField label="images" source="images" />
            <ReferenceField label="orders" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <TextField label="title price" source="titlePrice" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="variance" source="variance" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
