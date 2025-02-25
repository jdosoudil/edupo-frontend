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
    const [poemHtml, setPoemHtml] = useState<string>("poem static test prdel");

    useEffect(() => {
        const fetchHtmlContent = async () => {
            // const url = "https://quest.ms.mff.cuni.cz/edupo/gen?metre=D&rhyme_scheme=ABBA&syllables_count=9&accept=txt";
            const url = "https://quest.ms.mff.cuni.cz/edupo/prdel?accept=txt";
            const res = await fetch(url, {
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
            // setPoemHtml(html);
            console.log(html);
        }

        // setPoemHtml("Test poem<br>test <b>123</b><br>test test");
        fetchHtmlContent();
    }, []);

    return (
        <div className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle>
                        {"Test 123"}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        { poemHtml }
                    </p>
                    { /* <p dangerouslySetInnerHTML={{ __html: poemHtml }} /> */ }
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