// "use client"
// // import { useMDXComponent } from 'next-contentlayer2/hooks'
// // import { BlurImage } from '../ui/blur-image'
import { CodeBlock } from '../code-block'
// import { MDXRemote } from 'next-mdx-remote'
// import { Kbd } from '@/components/ui/kbd'
// import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
// import ReactMarkdown, { Components } from "react-markdown";

// // import ImageZoom from '@/components/image-zoom'
// // import Link from 'next/link'
// // import Image from "next/image"

// import ItemGrid from './item-grid'
// import LinkCard from './link-card'
// import Table from './table'
// import TreeView from './tree-view'
// import Video from './video'
// import { cn } from '@/lib/utils'

// type MdxProps = {
//   code: MDXRemoteSerializeResult
// }

// const components = {
//   h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
//     <h1
//       className={cn(
//         "font-heading mt-2 scroll-m-20 text-4xl font-bold",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
//     <h2
//       className={cn(
//         "font-heading mt-16 scroll-m-20 border-b pb-4 text-xl font-semibold tracking-tight first:mt-0",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
//     <h3
//       className={cn(
//         "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
//     <h4
//       className={cn(
//         "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
//     <h5
//       className={cn(
//         "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
//     <h6
//       className={cn(
//         "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
//     <a
//       className={cn("font-medium underline underline-offset-4", className)}
//       {...props}
//     />
//   ),
//   p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
//     <p
//       className={cn("leading-[1.65rem] [&:not(:first-child)]:mt-6", className)}
//       {...props}
//     />
//   ),
//   strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
//     <strong className={cn("font-semibold", className)} {...props} />
//   ),
//   ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
//     <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
//   ),
//   ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
//     <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
//   ),
//   li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
//     <li className={cn("mt-2", className)} {...props} />
//   ),
//   blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
//     <blockquote
//       className={cn("mt-6 border-l-2 pl-6 italic caret-blue-600", className)}
//       {...props}
//     />
//   ),
//   img: ({
//     className,
//     alt,
//     ...props
//   }: React.ImgHTMLAttributes<HTMLImageElement>) => (
//     // eslint-disable-next-line @next/next/no-img-element
//     <img className={cn("rounded-md", className)} alt={alt} {...props} />
//   ),
//   hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
//     <hr className="my-4 md:my-8" {...props} />
//   ),
//   table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
//     <div className="my-6 w-full overflow-y-auto">
//       <table
//         className={cn(
//           "relative w-full overflow-hidden border-none text-sm",
//           className
//         )}
//         {...props}
//       />
//     </div>
//   ),
//   tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
//     <tr
//       className={cn("last:border-b-none m-0 border-b", className)}
//       {...props}
//     />
//   ),
//   th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
//     <th
//       className={cn(
//         "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
//         className
//       )}
//       {...props}
//     />
//   ),
//   td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
//     <td
//       className={cn(
//         "px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
//         className
//       )}
//       {...props}
//     />
//   ),
//   code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
//     <code
//       className={cn(
//         "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
//         className
//       )}
//       {...props}
//     />
//   ),
//   Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
//     <h3
//       className={cn(
//         "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
//         className
//       )}
//       {...props}
//     />
//   ),
//   Steps: ({ ...props }) => (
//     <div
//       className="[&>h3]:step steps mb-12 [counter-reset:step] md:ml-4 md:border-l md:pl-8"
//       {...props}
//     />
//   ),
//   // Image: (props: React.ComponentProps<typeof BlurImage>) => {
//   //   const { alt, ...rest } = props

//   //   return (
//   //     <>
//   //       <ImageZoom>
//   //         <BlurImage className='rounded-lg border' alt={alt} {...rest} />
//   //       </ImageZoom>
//   //       <figcaption className='mt-4 text-center'>{alt}</figcaption>
//   //     </>
//   //   )
//   // },
//   pre: CodeBlock,

//   // Custom components
//   // Image,
//   Table,
//   ItemGrid,
//   Video,
//   LinkCard,
//   // Logo,
//   TreeView,
//   Kbd
// }

// const Mdx = (props: MdxProps) => {
//   const { code } = props
//   // const Component = useMDXComponent(code)

//   return (
//     <div className='prose w-full'>
//       <MDXRemote {...code} components={components} />
//     </div>
//   )
// }

// export default Mdx


import { cn } from "@/lib/utils";
// import "highlight.js/styles/github-dark-dimmed.min.css";
// import { Lightbulb } from "lucide-react";
import ReactMarkdown, { Components } from "react-markdown";
import { Tweet } from "react-tweet";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
// import { Alert, AlertDescription } from "./ui/alert";

const components: Components = {
  h1: ({ className, node: _n, ...props }) => <h1 className={cn("mb-4 mt-6 text-3xl font-bold", className)} {...props} />,
  h2: ({ className, node: _n, ...props }) => <h2 className={cn("mb-4 mt-6 text-2xl font-semibold", className)} {...props} />,
  h3: ({ className, node: _n, ...props }) => <h3 className={cn("mb-4 mt-6 text-xl font-semibold", className)} {...props} />,
  h4: ({ className, node: _n, ...props }) => <h4 className={cn("text-lg font-semibold", className)} {...props} />,
  h5: ({ className, node: _n, ...props }) => <h5 className={cn("text-sm font-semibold", className)} {...props} />,
  h6: ({ className, node: _n, ...props }) => <h6 className={cn("text-base font-semibold", className)} {...props} />,
  a: ({ className, href, node, target, ref, ...props }) => {
    const tweetMatch = (node?.properties?.href as string)?.match(/twitter\.com\/\w+\/status\/(\d+)/);

    if (typeof node?.properties.href === "string" && tweetMatch) {
      const tweetId = tweetMatch[1];

      if (!tweetId) return null;

      return <Tweet id={tweetId} />;
    }

    if (typeof node?.properties.href === "string" && node?.properties.href.includes("youtube.com")) {
      const youtubeId = new URL(node?.properties.href).searchParams.get("v");

      if (!youtubeId) return null;

      return <iframe src={`https://www.youtube.com/embed/${youtubeId}`} allowFullScreen className="h-96 w-full" />;
    }

    // Hashnode adds a style attribute to links, which we don't want
    delete props.style;

    return <a className={cn("underline underline-offset-4", className)} href={href ?? ""} target={target ?? "_blank"} {...props} />;
  },
  strong: ({ className, node: _n, ...props }) => <strong className={cn("font-bold", className)} {...props} />,
  p: (props) => <p className={cn("my-4", props.className)} {...props} />,
  ul: ({ className, node: _n, ...props }) => <ul className={cn("ml-6 list-disc", className)} {...props} />,
  ol: ({ className, node: _n, ...props }) => <ol className={cn("ml-6 list-decimal", className)} {...props} />,
  li: (props) => <li className={cn("mt-2", props.className)} {...props} />,
  blockquote: ({ className, node: _n, ...props }) => <blockquote className={cn("my-3 border-l-2 pl-6 italic", className)} {...props} />,
  img: ({ className, alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("inline-block rounded-md", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  pre: CodeBlock,
  // code: ({ className, children, node, ...props }) => {
  //   const isMultiline = node?.children?.length ?? 0 > 1;
  //   if (isMultiline) {
  //     const { className } = node?.properties ?? {};
  //     return <code className={(className as string[])?.join(" ")}>{children}</code>;
  //   }
  //   return (
  //     <code className={cn("relative mx-1 rounded bg-opacity-25 px-[0.3rem] py-[0.2rem] align-middle font-mono text-sm", className)} {...props}>
  //       {children}
  //     </code>
  //   );
  // },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    return (<code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />)
  },
  // div: (props) => {
  //   if (props.node?.properties.dataNodeType === "callout-emoji") return null;

  //   if (props.node?.properties.dataNodeType === "callout-text")
  //     return (
  //       <Alert className="my-8">
  //         <AlertDescription className="flex items-center">
  //           <Lightbulb className="mr-2 hidden h-5 w-5 sm:flex" />
  //           <div className="flex flex-col" {...props} />
  //         </AlertDescription>
  //       </Alert>
  //     );

  //   return <div {...props} />;
  // },
};

interface MdxProps {
  code: string;
  baseUri?: string;
}

export function Mdx({ code, baseUri }: MdxProps) {
  const transformLink = (href: string) => {
    if (href.startsWith("http")) {
      return href;
    }
    return baseUri ? `${baseUri}${href}` : href;
  };

  const transformEmbeds = (code: string) => code.replace(/%\[(.*?)\]/g, "$1");

  const removeAligns = (code: string) => code.replace(/align=\"(left|right|center)\"/g, "");

  const sanatize = (code: string) => removeAligns(transformEmbeds(code));

  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        rehypeSlug,
        rehypeAutolinkHeadings,
        // @ts-expect-error
        ...(code.includes("```") ? [[rehypeHighlight, { detect: true }]] : []),
      ]}
      urlTransform={transformLink}
    // className="mdx"
    >
      {sanatize(code)}
    </ReactMarkdown>
  );
}