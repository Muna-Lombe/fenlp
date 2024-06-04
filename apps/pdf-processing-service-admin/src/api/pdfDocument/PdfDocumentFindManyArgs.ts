import { PdfDocumentWhereInput } from "./PdfDocumentWhereInput";
import { PdfDocumentOrderByInput } from "./PdfDocumentOrderByInput";

export type PdfDocumentFindManyArgs = {
  where?: PdfDocumentWhereInput;
  orderBy?: Array<PdfDocumentOrderByInput>;
  skip?: number;
  take?: number;
};
