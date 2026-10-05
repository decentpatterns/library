import { test } from "node:test"
import assert from "node:assert"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { parse } from "yaml"

const contentDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "content")
const patternsDir = path.join(contentDir, "patterns")
const topicsDir = path.join(contentDir, "topics")

const VALID_STATUSES = ["stub", "draft", "mature"]

function frontmatter(source: string): Record<string, any> {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  return match ? (parse(match[1]) ?? {}) : {}
}

const patternFiles = fs
  .readdirSync(patternsDir)
  .filter((f) => f.endsWith(".md") && f !== "_template.md" && f !== "index.md")

const topicNames = fs
  .readdirSync(topicsDir)
  .filter((f) => f.endsWith(".md") && f !== "index.md")
  .map((f) => f.replace(/\.md$/, ""))

test("there are patterns and topics to lint", () => {
  assert.ok(patternFiles.length > 0, "no pattern files found")
  assert.ok(topicNames.length > 0, "no topic files found")
})

for (const file of patternFiles) {
  test(`pattern frontmatter: ${file}`, () => {
    const data = frontmatter(fs.readFileSync(path.join(patternsDir, file), "utf-8"))

    assert.ok(typeof data.title === "string" && data.title.trim().length > 0, "title is required")
    assert.ok(
      typeof data.description === "string" && data.description.trim().length > 0,
      "description is required",
    )

    const tags: string[] = Array.isArray(data.tags) ? data.tags : []
    const topicTags = tags.filter((t) => typeof t === "string" && t.startsWith("topic/"))
    assert.strictEqual(
      topicTags.length,
      1,
      `expected exactly one topic/<name> tag, found: ${topicTags.join(", ") || "none"}`,
    )
    const topic = topicTags[0].slice("topic/".length)
    assert.ok(
      topicNames.includes(topic),
      `topic tag "${topicTags[0]}" has no matching content/topics/${topic}.md`,
    )

    assert.ok(
      VALID_STATUSES.includes(data.status),
      `status must be one of ${VALID_STATUSES.join(" | ")}, got: ${data.status}`,
    )

    for (const key of ["thumbnail", "illustration"]) {
      if (data[key] !== undefined) {
        assert.ok(typeof data[key] === "string", `${key} must be a string path`)
        assert.ok(
          fs.existsSync(path.join(contentDir, data[key])),
          `${key} references a missing file: ${data[key]}`,
        )
      }
    }
  })
}
