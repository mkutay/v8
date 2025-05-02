import Link from 'next/link';
import { ArrowRight, Mailbox } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { TypographyHr } from './typography/blockquote';

export default function DoublePane({
  children,
  hideFollowLink,
  side,
}: Readonly<{
  children: React.ReactNode;
  hideFollowLink?: boolean;
  side?: React.ReactNode;
}>) {
  if (!side) {
    return (
      <section className="px-4 w-full mx-auto lg:max-w-6xl md:mb-12 mb-6">
        <div className="w-full flex flex-col gap-4 max-w-prose">
          <div>
            {children}
          </div>
          <TypographyHr className="my-4" />
          {!hideFollowLink ? <div className="flex flex-row justify-between items-center">
            <EmailSubButton />
            <FollowNext />
          </div> : <div className="flex flex-row justify-end items-center">
            <EmailSubButton />
          </div>}
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 w-full mx-auto lg:max-w-6xl md:mb-12 mb-6 flex flex-row gap-12">
      <div className="w-full flex flex-col gap-4 max-w-prose">
        <div>
          {children}
        </div>
        <TypographyHr className="my-4" />
        {!hideFollowLink ? <div className="flex flex-row justify-between items-center">
          <EmailSubButton />
          <FollowNext />
        </div> : <div className="flex flex-row justify-end items-center">
          <EmailSubButton />
        </div>}
      </div>
      <div className="w-fit sticky top-16 h-fit">
        {side}
      </div>
    </section>
  );
}

function EmailSubButton() {
  return (
    <div className="flex flex-col gap-4">
      {/* <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
        Subscribe to my newsletter to get updates on new posts and email only specials.
      </p> */}
      <Button variant="secondary" size="lg" className="flex mx-auto" asChild>
        <Link href={siteConfig.newsletterSubscribe} className="flex flex-row gap-3 w-fit font-normal tracking-wide">
          <Mailbox stroke="currentColor" strokeWidth="1.6px" />
          <div>Subscribe!</div>
        </Link>
      </Button>
    </div>
  );
}

function FollowNext() {
  return (
    <div className="text-primary group pl-0 hover:pl-2 transition-all animate-in flex flex-row items-start justify-end">
      <div className="pr-4 group-hover:pr-2 transition-all animate-in mt-[5px] sm:flex hidden">
        <ArrowRight stroke="currentColor" strokeWidth="2px" width="18px" height="18px"/>
      </div>
      <Link href="/follow-next" className="text-xl font-normal italic tracking-wider uppercase text-right">
        find out who to follow next
      </Link>
    </div>
  )
}