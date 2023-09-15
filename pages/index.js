import dynamic from "next/dynamic";

const Home  = dynamic(()=>import('web/ParticleConfettiAnimation'),
{ssr:false,
loading:()=>{
console.log("loading")
return(<div>loading</div>)}})

export default function ABC (){
console.log(Home,'Home')
return <div>abcd<Home/></div>
}
