import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { AmazonDatumrTitle } from "../amazonDatumr/AmazonDatumrTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="payment" source="payment" />
        <BooleanInput label="payment status" source="paymentStatus" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput source="products" reference="Product">
          <SelectArrayInput
            optionText={ProductTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <div />
        <ReferenceInput source="user.id" reference="AmazonDatumr" label="user">
          <SelectInput optionText={AmazonDatumrTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
