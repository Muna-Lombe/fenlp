import { Section as TSection } from "../api/section/Section";

export const SECTION_TITLE_FIELD = "title";

export const SectionTitle = (record: TSection): string => {
  return record.title?.toString() || String(record.id);
};
