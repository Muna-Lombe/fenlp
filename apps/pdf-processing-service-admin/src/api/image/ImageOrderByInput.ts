import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  imagePath?: SortOrder;
  sectionId?: SortOrder;
  updatedAt?: SortOrder;
};
