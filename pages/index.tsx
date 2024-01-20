import LoginForm from "../components/Loginform";
import Image from "next/image";

export default function Page() {
  
  return <div className='flex flex-col items-center'>
    <Image src="/assets/FelizHikeLogo.png" width={300} height={300} alt={""}/>
  <LoginForm/>
  </div>
}
