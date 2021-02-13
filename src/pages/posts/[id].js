// import { useRouter } from 'next/router';
import Head from 'next/head';
import styled from '@emotion/styled';

const Post = ({ postData }) => {
  const Container = styled.div({ width: '90%', margin: '0 auto' });
  const Image = styled.img`
    width: 100%;
    margin-top: 14px;
    border-radius: 10px;
  `;
  // const router = useRouter();
  // if (router.isFallback) {
  //   return (
  //     <div>
  //       <p>Loading page data......</p>
  //     </div>
  //   );
  // }
  return (
    <>
      <Head>
        <title>{postData.title} - Dev Media</title>
      </Head>
      <Container>
        <Image
          src={`https://source.unsplash.com/collection/${postData.id}/1600x600`}
          alt={postData.title}
        />
        <h2>{postData.title}</h2>
        <p>{postData.body}</p>
      </Container>
    </>
  );
};

export default Post;

// export async function getStaticPaths() {
//   const paths = ['/posts/1', '/posts/2'];
//   return { paths, fallback: true };
// }

// export async function getStaticProps({ query, params }) {
//   const { id } = query || params;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const postData = await res.json();
//   return {
//     props: { postData },
//   };
// }

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const postData = await res.json();
  return {
    props: { postData },
  };
}
