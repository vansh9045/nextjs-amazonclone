import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ProductTitle } from "../product/ProductTitle";
import { AmazonDatumrTitle } from "../amazonDatumr/AmazonDatumrTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="rating" source="rating" />
        <ReferenceInput source="user.id" reference="AmazonDatumr" label="user">
          <SelectInput optionText={AmazonDatumrTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
