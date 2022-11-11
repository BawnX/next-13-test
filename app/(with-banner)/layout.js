export default function PostsLayout ({ children }) {
  return (
    <div>
      <marquee style={{ background: '#fff', color: 'purple' }}>Probando multi layout</marquee>
      {children}
    </div>
  )
}
