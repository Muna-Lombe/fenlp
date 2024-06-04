import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SECTION_TITLE_FIELD } from "./SectionTitle";
import { PDFDOCUMENT_TITLE_FIELD } from "../pdfDocument/PdfDocumentTitle";

export const SectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="PDFDocument"
          source="pdfdocument.id"
          reference="PdfDocument"
        >
          <TextField source={PDFDOCUMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Image" target="sectionId" label="Images">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="imagePath" source="imagePath" />
            <ReferenceField
              label="Section"
              source="section.id"
              reference="Section"
            >
              <TextField source={SECTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
