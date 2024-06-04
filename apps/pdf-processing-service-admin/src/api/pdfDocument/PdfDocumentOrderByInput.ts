import { SortOrder } from "../../util/SortOrder";

export type PdfDocumentOrderByInput = {
  createdAt?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadedAt?: SortOrder;
};
