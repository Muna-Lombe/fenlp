import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SectionTitle } from "../section/SectionTitle";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="imagePath" source="imagePath" />
        <ReferenceInput source="section.id" reference="Section" label="Section">
          <SelectInput optionText={SectionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
