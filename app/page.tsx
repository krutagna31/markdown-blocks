"use client";

import { useState } from "react";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import { SectionContainer, ViewContainer } from "@/components/layouts";
import { Textarea } from "@/components/ui";

const initialMarkdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| A   | B   | C   | D   |
| --- | --- | --- | --- |
| 1   | 2   | 3   | 4   |
| 5   | 6   | 7   | 8   |
| 9   | 10  | 11  | 12  |

`;

export default function Home() {
  const [markdown, setMarkDown] = useState<string>(initialMarkdown);

  const handleMarkdownChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setMarkDown(event.target.value);
  };

  return (
    <SectionContainer>
      <ViewContainer className="space-y-4">
        <Textarea
          value={markdown}
          onChange={handleMarkdownChange}
          placeholder="*a heading...*"
        />
        {markdown && (
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              table: ({ ...props }) => (
                <table className="border border-neutral-700" {...props} />
              ),
              th: ({ ...props }) => (
                <th
                  className="border border-neutral-700 px-3 py-1"
                  {...props}
                />
              ),
              td: ({ ...props }) => (
                <td
                  className="border border-neutral-700 px-3 py-1"
                  {...props}
                />
              ),
            }}
          >
            {markdown}
          </Markdown>
        )}
      </ViewContainer>
    </SectionContainer>
  );
}
