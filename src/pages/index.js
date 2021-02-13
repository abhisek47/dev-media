import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const Container = styled.div({
    width: '90%',
    margin: '0 auto',
  });
  const BlogLink = styled.p`
    color: #3d5af1;
    cursor: pointer;
  `;
  return (
    <>
      <Head>
        <title>
          Dev Media - We provide best knowledge and resources for developers
        </title>
        <meta
          name='keywords'
          content='Web Development, Resources, Programming,'
        />
      </Head>
      <Container>
        <h1>Welcome Developes !!</h1>
        <Link href='/posts'>
          <BlogLink>Go to blogs &rarr;</BlogLink>
        </Link>
      </Container>
    </>
  );
}
