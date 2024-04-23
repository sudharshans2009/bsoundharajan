import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

export const databaseList = {
  publications: "449145d472cc486da630d945a076819e",
  projects: "697aa128bca84c939da641c91ef788ee",
  awards: "17a48a919d9b4bf9ac9b260b33a2abb5",
  workshops: "bafa53c576dd4addb203f7deb6144c0d",
  collaborations: "fcc2e505431b4f8f926906741afb8f1e",
  gallery: "a37f9416acdb48399375540ba75cc1f1"
};

export function queryDatabase(databaseKey) {
  const databaseId = databaseList[databaseKey];
  return notion.databases.query({ database_id: databaseId });
}

export function formatDatabase(rawData) {
  return rawData.results.map(({ properties }) => {
    const arr = Object.keys(properties);
    const obj = {};

    arr.forEach(key => {
      obj[key] = properties[key][properties[key].type]
    });

    return obj;
  });
}