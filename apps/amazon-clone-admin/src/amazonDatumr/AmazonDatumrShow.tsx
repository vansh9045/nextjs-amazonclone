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

import { AMAZONDATUMR_TITLE_FIELD } from "./AmazonDatumrTitle";
import { REVIEW_TITLE_FIELD } from "../review/ReviewTitle";

export const AmazonDatumrShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="is admin" source="isAdmin" />
        <ReferenceField label="reviews" source="review.id" reference="Review">
          <TextField source={REVIEW_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Order" target="userId" label="orders">
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
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
