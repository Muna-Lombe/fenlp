import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { PdfDocumentWhereUniqueInput } from "../pdfDocument/PdfDocumentWhereUniqueInput";

export type SectionWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  images?: ImageListRelationFilter;
  pdfDocument?: PdfDocumentWhereUniqueInput;
  title?: StringNullableFilter;
};
