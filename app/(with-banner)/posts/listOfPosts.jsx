import Link from 'next/link'
import { LikeButton } from './likeButton'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  }).then(res => res.json())
}

export async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(post =>
    <article key={post.id}>
      <h2 style={{ color: '#09f' }}>
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  )
}
