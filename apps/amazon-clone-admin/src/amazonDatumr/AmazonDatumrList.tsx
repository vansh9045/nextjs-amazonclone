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
import { REVIEW_TITLE_FIELD } from "../review/ReviewTitle";

export const AmazonDatumrList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="is admin" source="isAdmin" />
        <ReferenceField label="reviews" source="review.id" reference="Review">
          <TextField source={REVIEW_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
