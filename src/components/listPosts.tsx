import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote-client/rsc';

import { Button } from '@/components/ui/button';
import { getPosts } from '@/lib/contentQueries';
import { components, options } from '@/config/mdxRemoteSettings';
import { PostMeta } from '@/config/types';

export default function ListPosts({
  startInd,
  endInd,
  tags,
  disallowTags
}: {
  startInd: number,
  endInd: number,
  tags?: string[],
  disallowTags?: string[]
}) { // half-open interval
  const posts: {
    slug: string,
    meta: PostMeta,
    content: string,
  }[] = getPosts({ startInd, endInd, tags, disallowTags });

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <div key={post.slug} className="flex flex-col gap-4">
          <h2 className="scroll-m-20 border-b border-border pb-1 text-3xl font-semibold tracking-tight first:mt-0 mt-6">
            <Link href={`/posts/${post.slug}`} className="hover:text-foreground/80 transition-all duration-100">
              {post.meta.title}
            </Link>
          </h2>
          <h3 className="text-muted-foreground italic font-medium">
            {post.meta.description}
          </h3>
          <div>
            <MDXRemote source={post.meta.excerpt} options={options} components={components}/>
          </div>
          <div className="flex flex-row justify-end">
            <Button asChild variant="outline" size="default" className="w-fit">
              <Link href={`/posts/${post.slug}`}>
                {`Read More: ${post.meta.shortened.toLowerCase().split(' ').map(function(word) { return word[0].toUpperCase() + word.slice(1); }).join(' ')}`}
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}