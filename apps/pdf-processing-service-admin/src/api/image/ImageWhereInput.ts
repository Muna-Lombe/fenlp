import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SectionWhereUniqueInput } from "../section/SectionWhereUniqueInput";

export type ImageWhereInput = {
  id?: StringFilter;
  imagePath?: StringNullableFilter;
  section?: SectionWhereUniqueInput;
};
