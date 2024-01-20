import {Walkcard} from '../components/Walkcard'
import { walks } from "../data/walks";

export default function Page() {
    return (
      <>
    <h1 className="uppercase font-sans text-center text-2xl">upcoming walks</h1>
    <div className="mt-4 grid grid-cols-2 gap-4">
    {walks.map((walk) => (
      <Walkcard
      key={walk.id}
        name={walk.name}
        date={walk.datetime}
        image={walk.imageUrl}
        id={walk.id}
        >
        </Walkcard>
     
    ))}
    </div>
    </>
    )
  }