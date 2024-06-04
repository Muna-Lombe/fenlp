import { SectionCreateNestedManyWithoutPdfDocumentsInput } from "./SectionCreateNestedManyWithoutPdfDocumentsInput";

export type PdfDocumentCreateInput = {
  filePath?: string | null;
  sections?: SectionCreateNestedManyWithoutPdfDocumentsInput;
  uploadedAt?: Date | null;
};
