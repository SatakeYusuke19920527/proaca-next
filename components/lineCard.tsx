import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import StCard from './stCard';
const LineCard: NextPage = () => {
  const router = useRouter();
  const movePage = () => {
    router.push('/line');
  };
  return (
    <StCard onClick={movePage}>
      <h1>LINE</h1>
    </StCard>
  );
};

export default LineCard;
