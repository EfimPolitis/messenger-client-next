import HomeLayout from '@/components/layouts/home';
import {
  CardBlock,
  FirstScreen,
  InfoBlock,
  StartBlcok,
} from '@/components/pages/home';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { getServerAuth } from '@/utils/server/get-server-auth';
import { redirect } from 'next/navigation';

async function HomePage() {
  const user = await getServerAuth();

  if (user?.isLoggedIn) return redirect(PUBLIC_PAGES.CHATS);

  return (
    <HomeLayout>
      <FirstScreen />
      <InfoBlock />
      <CardBlock />
      <StartBlcok />
    </HomeLayout>
  );
}

export default HomePage;
