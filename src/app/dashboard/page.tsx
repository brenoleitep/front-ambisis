import { getXataClient } from "@/xata";


export default async function Dashboard () {
  const getXata = getXataClient();
  const folders = await getXata.db.folders.getMany()
  return (
    <div>
      <h1>
      dashboard
      </h1>

      {folders.map((elem) => <p key={elem.id}>{elem.name}</p>)}
    </div>
  )
}

