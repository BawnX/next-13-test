import Image from 'next/image'

const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))

  // throw new Error('error')

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
  return data.json()
}

export default async function CommentsPage ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ background: '#444', fontSize: '10px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image src={`https://avatars.dicebear.com/api/pixel-art/${comment.email}.svg`} alt={comment.name} width='50' height='50' />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
