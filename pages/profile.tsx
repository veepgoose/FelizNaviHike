import { useRouter } from "next/router";
import Link from "next/link";
import { walks } from "@/data/walks";
import { Profile } from "@/components/Profile";
import { users } from "@/data/users";

export default function Page() {
 

  return (
    <Profile {...users[0]}/> 
  );
}