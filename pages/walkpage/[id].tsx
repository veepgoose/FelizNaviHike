import { useRouter } from "next/router";

import { walks } from "@/data/walks";

export default function Page() {
  const router = useRouter();

  const walk = walks.find((walk) => walk.id === router.query.id);

  if (!walk) return <h1>Walk not found</h1>;

  return (
    <div className="p-4 py-8 flex flex-col gap-4">
      <h1 className="text-2xl">
        <strong>Walk:</strong> {walk.name}
      </h1>

      <p>{new Intl.DateTimeFormat("en-GB").format(new Date(walk.datetime))}</p>

      <img src={walk.imageUrl} />

      <div dangerouslySetInnerHTML={{ __html: walk.descriptionHtml }} />

      <h2 className="text-xl">
        <strong>Location:</strong> {walk.location.name}
      </h2>
      <img
        src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/static/${walk.location.lng},${walk.location.lat},11.7,0/300x200@2x?access_token=pk.eyJ1Ijoiam1zdiIsImEiOiJjbHJtMDk1cGIwbGd5MmpvamdpMGxhYTg2In0.Z5PDDwDBLmuzhQZyzH7zVQ`}
      />
    </div>
  );
}