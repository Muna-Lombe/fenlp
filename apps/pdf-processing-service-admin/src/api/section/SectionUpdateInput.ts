import { ImageUpdateManyWithoutSectionsInput } from "./ImageUpdateManyWithoutSectionsInput";
import { PdfDocumentWhereUniqueInput } from "../pdfDocument/PdfDocumentWhereUniqueInput";

export type SectionUpdateInput = {
  content?: string | null;
  images?: ImageUpdateManyWithoutSectionsInput;
  pdfDocument?: PdfDocumentWhereUniqueInput | null;
  title?: string | null;
};
