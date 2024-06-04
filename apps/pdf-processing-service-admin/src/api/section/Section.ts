import { Image } from "../image/Image";
import { PdfDocument } from "../pdfDocument/PdfDocument";

export type Section = {
  content: string | null;
  createdAt: Date;
  id: string;
  images?: Array<Image>;
  pdfDocument?: PdfDocument | null;
  title: string | null;
  updatedAt: Date;
};
