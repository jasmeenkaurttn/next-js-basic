import axios from "axios"
import Link from "next/link"
import Table from 'react-bootstrap/Table'

function Album({ albums }) {
  return (
    <div className="ml-2 p-2 mx-2 mb-3 gx-2 text-center">
      <Table responsive striped bordered variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Album Name</th>
            <th>Go to</th>
          </tr>
        </thead>
        {albums.map((album) => (
          <>
            <tbody>
              <tr>
                <td>{album.id}</td>
                <td>{album.title}</td>
                <td><Link href={`/album/${album.id}`}><button className="rounded p-1 px-3">Album</button></Link></td>
              </tr>
            </tbody>
        </>
      ))}
      </Table>
    </div>
  )
}


export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/albums")
  return {
    props: {
      albums: res.data
    }
  }
}
export default Album