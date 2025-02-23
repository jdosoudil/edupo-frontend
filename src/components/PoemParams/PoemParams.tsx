import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";

function Section({ withSwitch, children } : { withSwitch: boolean; children?: React.ReactElement }) {
    return (
        <div className="w-full flex gap-4 justify-between">
            {
                withSwitch
                    ? <>
                        {children}
                        <div className="flex flex-col flex-none justify-between gap-2">
                            {"Náhodně"}
                            <Switch />
                        </div>
                    </>
                    : <>
                        {children}
                    </>
            }
        </div>
    )
}

export default function PoemParams() {
  return (
    <div className="w-full flex flex-col gap-4 font-bold">
        <Section withSwitch={false}>
            <>{"Název"}</>
        </Section>
        <Section withSwitch={true}>
            <div className="flex flex-col grow justify-between">
                {"Temperature"}
                <div className="flex h-[24px]">
                    <Slider defaultValue={[0.56]} max={1} step={0.05} />
                </div>
            </div>
        </Section>
    </div>
  )
}