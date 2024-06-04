import { Section } from "../section/Section";

export type PdfDocument = {
  createdAt: Date;
  filePath: string | null;
  id: string;
  sections?: Array<Section>;
  updatedAt: Date;
  uploadedAt: Date | null;
};
