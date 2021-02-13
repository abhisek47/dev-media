import styled from '@emotion/styled';
import Link from 'next/link';
import Head from 'next/head';

const Posts = ({ posts }) => {
  const Container = styled.div({ width: '90%', margin: '0 auto' });
  const Post = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `;
  const PostItem = styled.li({
    backgroundColor: 'ghostwhite',
    margin: '8px 0',
    padding: '10px',
    borderRadius: '10px',
  });
  const Image = styled.img`
    width: 100%;
    border-radius: 10px;
  `;
  const Title = styled.h3({ color: 'dodgerblue', cursor: 'pointer' });
  return (
    <>
      <Head>
        <title>Blogs - Dev Media</title>
      </Head>
      <Container>
        <Post>
          {posts.map((post) => (
            <PostItem key={post.id}>
              <Image
                src={`https://source.unsplash.com/collection/${post.id}/1600x900`}
                alt={post.title}
              />
              <Link href='/posts/[id]' as={'/posts/' + post.id}>
                <Title>{post.title}</Title>
              </Link>
              <p>{post.body}</p>
            </PostItem>
          ))}
        </Post>
      </Container>
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    props: { posts },
  };
}
