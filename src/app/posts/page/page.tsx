import { redirect } from 'next/navigation';

export const dynamic = 'force-static';

export default function Page() {
  redirect('/posts/page/1');
}