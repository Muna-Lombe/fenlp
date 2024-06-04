import { Section } from "../section/Section";

export type Image = {
  createdAt: Date;
  id: string;
  imagePath: string | null;
  section?: Section | null;
  updatedAt: Date;
};
