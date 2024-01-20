
export function Walkcard(props:{
    name: string;
    date: string;
    image: string;
}
) {
    return (
        <div> 
            <div className="rounded-">
            <img src={props.image} alt="walk" />
            </div>
            <h3>{props.name}</h3>
            <p>{new Intl.DateTimeFormat('en-GB').format(new Date(props.date))}</p>
        </div>
    )}