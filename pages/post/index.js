import axios from "axios";
import Link from 'next/link'

function Post({posts}) {
  return (
    <div className="card-columns ml-2 p-2 mx-2 mb-3 gx-2">
      {posts.map((post) => (
        <>
          <div className="card d-flex mb-3" key={post.id}>
            <div className="card-body">
              <h3 className="card-title">{post.title}</h3>
              <span className="card-text">{post.body}</span> <br />
              <Link href={`/post/${post.id}`}><button className="mt-3 border border-secondary p-1 px-2">Read more...</button></Link>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  // By convention, getStaticProps funcn returns an object
  return {
    props: {
      posts: res.data
    },
  }
}
export default Post