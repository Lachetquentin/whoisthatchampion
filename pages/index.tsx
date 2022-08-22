import Hub from 'components/pages/hub';
import LolGame from 'lol/components/pages/game';
import PageLayout from 'lol/components/shared/layout/page';

export default function Home() {
  return (
    <PageLayout>
      <LolGame />
    </PageLayout>
  );
}
