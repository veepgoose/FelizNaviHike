export const Profile = (props: {id: string, firstName: string, lastName: string, location: string, imageUrl: string, bio: string}) => {
    return (
        <div className="p-4 py-8 flex flex-col gap-4 items-center">
            <h1 className="text-2xl text-center">
                 {props.firstName} {props.lastName}
            </h1>
            <img className="aspect-square rounded-full object-cover w-3/4 mx-auto" src={props.imageUrl} />
            <div className="text-center"dangerouslySetInnerHTML={{ __html: props.bio }} />
            <h2 className="text-xl">
                <strong>Location:</strong> {props.location}
            </h2>
           
        </div>
    )
}