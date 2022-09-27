import axios from "axios";

function PostComment({ comments }) {
  return (
    <>
      <h4 className="m-2 mx-4">Comments on this post: </h4>
      <hr />
      <div className="card-columns ml-2 p-2 mx-2 mb-3 gx-2">
        {comments.map((comment) => (
          <>
            <ul style={{ listStyle: 'none' }}>
              <li key={comment.id}> {comment.body}</li>
            </ul>
          </>
        ))}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const data = res.data;
  const paths = data.map(post => {
    return {
      params: {
        postId: `${post.id}`
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps(context) { // context is an object which contains a key called params
  const { params } = context
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)
  // console.log(res)
  const data = await res.data
  return {
    props: {
      comments: data,
    }
  }
}


export default PostComment