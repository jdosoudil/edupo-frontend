import Poem from "@/components/Poem";
import Sidebar from "@/components/Sidebar";

export default function Home() {  
  return (
    <div className="flex gap-6 h-full">
      <div className="flex-1 pl-docOffsetXSmall tablet:pl-docOffsetXBig py-4">
        <Poem />
      </div>
      <Sidebar />
    </div>
  );
}
