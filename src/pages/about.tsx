import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return { redirect: { destination: '/#about', permanent: true } };
};

export default function AboutRedirect() {
  return null;
}
