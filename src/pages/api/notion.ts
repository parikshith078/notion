import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notionSceret = process.env.NOTION_SCERET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSceret });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!notionSceret || !notionDatabaseId) {
    return res.status(400).json({ message: "env not set" });
  }

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  console.log(query.results);

  res.status(200).json({ name: "testing" });
}
