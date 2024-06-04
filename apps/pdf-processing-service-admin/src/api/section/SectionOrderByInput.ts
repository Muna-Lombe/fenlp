import { SortOrder } from "../../util/SortOrder";

export type SectionOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pdfDocumentId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
