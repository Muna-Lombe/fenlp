import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SectionListRelationFilter } from "../section/SectionListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PdfDocumentWhereInput = {
  filePath?: StringNullableFilter;
  id?: StringFilter;
  sections?: SectionListRelationFilter;
  uploadedAt?: DateTimeNullableFilter;
};
