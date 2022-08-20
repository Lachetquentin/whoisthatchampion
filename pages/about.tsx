import Button from 'components/shared/button';
import PageLayout from 'components/shared/layout/page';
import Link from 'next/link';

export default function About() {
  return (
    <PageLayout>
      <div className="text-2xl text-center mt-40 p-2">
        <p>
          Dev by <a href="https://github.com/Fantomiald">@Fantomiald</a> and{' '}
          <a href="https://github.com/Lachetquentin">@Ushysder</a>
        </p>
      </div>

      <div className="pt-4 text-center">
        <button className="px-8 h-10 bg-blue-600 text-white rounded font-semibold">
          <Link href="/">Return to homepage</Link>
        </button>
      </div>
    </PageLayout>
  );
}
