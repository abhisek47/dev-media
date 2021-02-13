import styled from '@emotion/styled';
import Head from 'next/head';

const About = () => {
  const Container = styled.div({ width: '90%', margin: '0 auto' });
  return (
    <>
      <Head>
        <title>About - Dev Media</title>
      </Head>
      <Container>
        <h1>This is an about page!</h1>
      </Container>
    </>
  );
};

export default About;
