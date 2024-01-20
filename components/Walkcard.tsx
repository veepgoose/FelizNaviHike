import Link from "next/link";

export function Walkcard(props:{
    name: string;
    date: string;
    image: string;
    id:string
}
) {
    return (
        
        <Link href={`/walkpage/${props.id}`} className='flex flex-col items-center'> 
            <div className="rounded-lg overflow-hidden">
            <img src={props.image} alt="walk" />
            </div>
            <h3 className='w-full truncate'>{props.name}</h3>
            <p>{new Intl.DateTimeFormat('en-GB').format(new Date(props.date))}</p>
        </Link>
    )}