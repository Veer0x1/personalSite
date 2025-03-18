"use client";

import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

type MdxRemoteViewerProps = {
  mdxSource: MDXRemoteSerializeResult;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components?: Record<string, any>;
};

export default function MdxRemoteViewer({ mdxSource, components }: MdxRemoteViewerProps) {
  return <MDXRemote {...mdxSource} components={components} />;
}