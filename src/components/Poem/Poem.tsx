"use client"

import { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Poem() {
    const [poemHtml, setPoemHtml] = useState<string>("poeam static test");

    useEffect(() => {
        const fetchHtmlContent = async () => {
            const res = await fetch("https://quest.ms.mff.cuni.cz/edupo/prdel", {
                method: "GET",
                headers: {
                  "Content-Type": "text/html",
                },
                cache: "no-store",
            });
            
            if (!res.ok) {
                throw new Error(`Error fetching HTML: ${res.statusText}`);
            }
            
            const html = await res.text();
            setPoemHtml(html);
        }

        // setPoemHtml("Test poem<br>test <b>123</b><br>test test");
        // fetchHtmlContent();
    }, []);

    return (
        <div className="w-full max-w-[650px]">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {"Test 123"}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p dangerouslySetInnerHTML={{ __html: poemHtml }} />
                </CardContent>
                <CardFooter>
                    <p>
                        {"Some functions here"}
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}