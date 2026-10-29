import { readFile } from "fs/promises";
import path from "path";
import { getWritingBySlug } from "./data";

const articleDirectory = path.join(process.cwd(), "content", "journal");

export async function getArticleSource(
  slug: string
): Promise<string | undefined> {
  if (!/^[a-z0-9-]+$/.test(slug)) return undefined;

  const writing = getWritingBySlug(slug);
  if (!writing || writing.status !== "published") return undefined;

  try {
    return await readFile(path.join(articleDirectory, `${slug}.mdx`), "utf8");
  } catch {
    return undefined;
  }
}
