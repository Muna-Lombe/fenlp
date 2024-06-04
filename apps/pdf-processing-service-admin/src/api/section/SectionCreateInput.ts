import { ImageCreateNestedManyWithoutSectionsInput } from "./ImageCreateNestedManyWithoutSectionsInput";
import { PdfDocumentWhereUniqueInput } from "../pdfDocument/PdfDocumentWhereUniqueInput";

export type SectionCreateInput = {
  content?: string | null;
  images?: ImageCreateNestedManyWithoutSectionsInput;
  pdfDocument?: PdfDocumentWhereUniqueInput | null;
  title?: string | null;
};
