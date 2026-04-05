import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return { redirect: { destination: '/#projects', permanent: true } };
};

export default function ProjectsRedirect() {
  return null;
}
