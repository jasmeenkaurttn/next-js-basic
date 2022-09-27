import axios from "axios"
import styles from '../../../styles/Home.module.css'
function Photos({photos}) {
  // const photos = photos.slice(0,4) 
  return(
    <div className="row row-cols-1 row-cols-md-5 p-2 mx-3 my-3 mb-4 gx-2 gy-2">
      {photos.map((photo) => (
        <>
          <div className="col col-sm-3 justify-content-center mb-3 m-1 border border-secondary" key={photo.id}>
            {/* <img  src={photo.url} /> */}
            <img 
              src="https://source.unsplash.com/random/275x150" 
              className="m-3 mx-1"
              style={{width: 'fit-content'}} /> <br />
            <hr />
            <span className="text-center">{photo.title}</span> 
          </div>
        </>
      ))}
    </div>
  )
}


export async function getStaticPaths() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/albums")
  const data = res.data
  const paths = data.map(album => {
    return {
      params: {
        albumId: `${album.id}`
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps(context) {
  const {params} = context
  const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`)
  const data = await res.data
  return{
    props: {
      photos: data,
    }
  }
}
export default Photos