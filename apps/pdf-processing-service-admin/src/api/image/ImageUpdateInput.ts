import { SectionWhereUniqueInput } from "../section/SectionWhereUniqueInput";

export type ImageUpdateInput = {
  imagePath?: string | null;
  section?: SectionWhereUniqueInput | null;
};
