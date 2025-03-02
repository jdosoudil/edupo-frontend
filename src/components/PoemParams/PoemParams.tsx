import Section from "./Section";
import Title from "./Title";
import { Slider } from "../ui/slider";
import { Combobox } from "../ui/combobox";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

/*
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
*/

export default function PoemParams() {
  return (
    <div className="w-full flex flex-col gap-4 font-bold">

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    Základní
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    <Section
                        title="Podle autora"
                        withSwitch={true}>
                        <Combobox
                            placeholder="Podle autora"
                            data={[
                                { label: "Karel Jaromír Erben", value: "Karel Jaromír Erben" },
                                { label: "Jaroslav Vrchlický", value: "Jaroslav Vrchlický" }
                            ]} />
                    </Section>
                    <Section
                        title="Název"
                        withSwitch={true}>
                            <Combobox
                                placeholder="Název"
                                data={[
                                    { label: "Polednice", value: "Polednice" },
                                    { label: "Za trochu lásky", value: "Za trochu lásky" }
                                ]} />
                    </Section>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    Pokročilé
                </AccordionTrigger>
                <AccordionContent>
                    <Section title="Temperature" withSwitch={true}>
                        <Slider defaultValue={[0.56]} max={1} step={0.05} />
                    </Section>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        {
            /*
        <Collapsible>
            <CollapsibleTrigger>Základní</CollapsibleTrigger>
            <CollapsibleContent>
                <Section withSwitch={true}>
                    <div className="flex flex-col grow justify-between">
                        {"Temperature"}
                        <div className="flex h-[24px]">
                            <Slider defaultValue={[0.56]} max={1} step={0.05} />
                        </div>
                    </div>
                </Section>
            </CollapsibleContent>
        </Collapsible>
        <Collapsible>
            <CollapsibleTrigger>Pokročilé</CollapsibleTrigger>
            <CollapsibleContent>
                <Section withSwitch={true}>
                    <div className="flex flex-col grow justify-between">
                        {"Temperature"}
                        <div className="flex h-[24px]">
                            <Slider defaultValue={[0.56]} max={1} step={0.05} />
                        </div>
                    </div>
                </Section>
            </CollapsibleContent>
        </Collapsible>
            */
        }

    </div>
  )
}