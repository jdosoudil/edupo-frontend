"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";

import * as React from "react";
import {
    Link as LinkIcon,
    QrCode,
    Check,
    ChevronsUpDown 
} from "lucide-react";
 
import {
    Button
} from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
 
const authors = [
  {
    value: "Karel Jaromír Erben",
    label: "Karel Jaromír Erben",
  },
  {
    value: "Ján Kollár",
    label: "Ján Kollár",
  },
  {
    value: "Jaroslav Vrchlický",
    label: "Jaroslav Vrchlický",
  },
];
 
export default function Header() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <header className="w-full bg-crimsonRed flex gap-6 justify-between items-center flex-wrap px-docOffsetXSmall tablet:px-docOffsetXBig py-docOffsetY text-white">

            <Link href="/">
                <h1>
                    EduPo 123 test
                </h1>
            </Link>
 
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[260px] justify-between text-black"
                    >
                    {value
                        ? authors.find((author) => author.value === value)?.label
                        : "Načti předpřipravenou ukázku"}
                    <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[260px] p-0">
                    <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandList>
                        <CommandEmpty>Nic nenalezeno.</CommandEmpty>
                        <CommandGroup>
                        {authors.map((author) => (
                            <CommandItem
                            key={author.value}
                            value={author.value}
                            onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                            }}
                            >
                            {author.label}
                            <Check
                                className={cn(
                                "ml-auto",
                                value === author.value ? "opacity-100" : "opacity-0"
                                )}
                            />
                            </CommandItem>
                        ))}
                        </CommandGroup>
                    </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            <div className="flex gap-2">
                <Button variant="outline" size="icon" className="text-black">
                    <LinkIcon />
                </Button>
                <Button variant="outline" size="icon" className="text-black">
                    <QrCode />
                </Button>
            </div>
            
        </header>
    )
}