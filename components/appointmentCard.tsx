import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import StCard from './stCard';
const AppointmentCard: NextPage = () => {
  const router = useRouter();
  const movePage = () => {
    router.push('/appointment');
  };
  return (
    <StCard onClick={movePage}>
      <h1>Appointment</h1>
    </StCard>
  );
};

export default AppointmentCard;
