import {Walkcard} from '../components/Walkcard'
import { walks } from "../data/walks";

export default function Page() {
    return (
      <>
    <h1>Hello, this is our winter walks dashboard</h1>
    <div className="grid grid-cols-2 gap-4">
    {walks.map((walk) => (
      <Walkcard
      key={walk.id}
        name={walk.name}
        date={walk.datetime}
        image={walk.imageUrl}
        >
        </Walkcard>
     
    ))}
    </div>
    </>
    )
  }