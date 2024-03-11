import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return <div className="w-full items-center  h-screen flex flex-col background overflow-auto">
    <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px]  px-10 py-2 text-bold text-3xl" 
    >RANDOM GIF</h1>
    <div className="flex w-11/12  items-center gap-10 m-10 mt-[30px]">
      <Random/>
      <Tag/>
      </div>
    </div>;
}
