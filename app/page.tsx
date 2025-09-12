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

| a | b |
| - | - |
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
          <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        )}
      </ViewContainer>
    </SectionContainer>
  );
}
