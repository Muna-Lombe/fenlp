import { SectionWhereUniqueInput } from "../section/SectionWhereUniqueInput";

export type ImageCreateInput = {
  imagePath?: string | null;
  section?: SectionWhereUniqueInput | null;
};
