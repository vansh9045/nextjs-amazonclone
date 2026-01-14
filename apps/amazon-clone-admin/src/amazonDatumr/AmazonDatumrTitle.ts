import { AmazonDatumr as TAmazonDatumr } from "../api/amazonDatumr/AmazonDatumr";

export const AMAZONDATUMR_TITLE_FIELD = "id";

export const AmazonDatumrTitle = (record: TAmazonDatumr): string => {
  return record.id?.toString() || String(record.id);
};
