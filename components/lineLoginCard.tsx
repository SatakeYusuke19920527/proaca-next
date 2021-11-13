import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import StCard from './stCard';
const LineLoginCard: NextPage = () => {
  const router = useRouter();
  const movePage = () => {
    router.push('/linelogin');
  };
  return (
    <StCard onClick={movePage}>
      <h1>LineLoginCard</h1>
    </StCard>
  );
};

export default LineLoginCard;
