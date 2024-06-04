import { SectionUpdateManyWithoutPdfDocumentsInput } from "./SectionUpdateManyWithoutPdfDocumentsInput";

export type PdfDocumentUpdateInput = {
  filePath?: string | null;
  sections?: SectionUpdateManyWithoutPdfDocumentsInput;
  uploadedAt?: Date | null;
};
