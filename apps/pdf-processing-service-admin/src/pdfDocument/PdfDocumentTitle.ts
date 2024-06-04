import { PdfDocument as TPdfDocument } from "../api/pdfDocument/PdfDocument";

export const PDFDOCUMENT_TITLE_FIELD = "filePath";

export const PdfDocumentTitle = (record: TPdfDocument): string => {
  return record.filePath?.toString() || String(record.id);
};
