import styled from '@emotion/styled';
import Head from 'next/head';

const Contact = () => {
  const Container = styled.div({ width: '90%', margin: '0 auto' });
  return (
    <>
      <Head>
        <title>Contact - Dev Media</title>
      </Head>
      <Container>
        <h1>This is a contact page!</h1>
      </Container>
    </>
  );
};

export default Contact;
