import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ImageTitle } from "../image/ImageTitle";
import { PdfDocumentTitle } from "../pdfDocument/PdfDocumentTitle";

export const SectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceArrayInput
          source="images"
          reference="Image"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImageTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="pdfDocument.id"
          reference="PdfDocument"
          label="PDFDocument"
        >
          <SelectInput optionText={PdfDocumentTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
