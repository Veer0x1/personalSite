"use client";

// import Heading from "./heading";
// import { CodeBlock } from "../code-block";
// import ItemGrid from "./item-grid";
// import LinkCard from "./link-card";
// import Table from "./table";
// import TreeView from "./tree-view";
// import Video from "./video";
// import { Kbd } from "@/components/ui/kbd";
// import Link from "next/link";
// import { BlurImage } from "../ui/blur-image";
// import ImageZoom from "@/components/image-zoom";

import { BlurImage } from '@/components/ui/blur-image'
import { CodeBlock } from '@/components/code-block'
import { Kbd } from '@/components/ui/kbd'

import ImageZoom from '@/components/image-zoom'
// import Link from '../link'
import Link from 'next/link'

import ItemGrid from '@/components/mdx/item-grid'
import LinkCard from '@/components/mdx/link-card'
// import Logo from './logo'
import Table from '@/components/mdx/table'
import TreeView from '@/components/mdx/tree-view'
import Video from '@/components/mdx/video'
import Heading from '@/components/mdx/heading'

export const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => <Heading as="h2" {...props} />,
  h3: (props: React.ComponentProps<"h3">) => <Heading as="h3" {...props} />,
  h4: (props: React.ComponentProps<"h4">) => <Heading as="h4" {...props} />,
  h5: (props: React.ComponentProps<"h5">) => <Heading as="h5" {...props} />,
  h6: (props: React.ComponentProps<"h6">) => <Heading as="h6" {...props} />,
  a: (props: React.ComponentProps<"a">) => {
    const { children, ...rest } = props;
    return (
      <Link
        className="hover:text-foreground text-anchor no-underline transition-colors"
        {...(rest as { href: string })}
      >
        {children}
      </Link>
    );
  },
  Image: (props: React.ComponentProps<typeof BlurImage>) => {
    const { alt, ...rest } = props;
    return (
      <>
        <ImageZoom>
          <BlurImage className="rounded-lg border" alt={alt} {...rest} />
        </ImageZoom>
        <figcaption className="mt-4 text-center">{alt}</figcaption>
      </>
    );
  },
  pre: CodeBlock,
  Table,
  ItemGrid,
  Video,
  LinkCard,
  TreeView,
  Kbd,
};