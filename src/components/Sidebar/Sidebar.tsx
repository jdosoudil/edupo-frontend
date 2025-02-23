import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PoemParams from "@/components/PoemParams";
import ImageParams from "@/components/ImageParams";

export default function Sidebar() {
  return (
    <div className="w-[400px] px-docOffsetXSmall tablet:px-docOffsetXBig py-4 bg-white border-l">
      <Tabs defaultValue="poem" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="poem" className="w-1/2">Báseň</TabsTrigger>
          <TabsTrigger value="image" className="w-1/2">Obrázek</TabsTrigger>
        </TabsList>
        <TabsContent value="poem">
          <PoemParams />
        </TabsContent>
        <TabsContent value="image">
          <ImageParams />
        </TabsContent>
      </Tabs>
    </div>
  )
}