"use client"

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

function Switch() {

    const [isDark, setIsDark] = useState(true);

    return <>
        <Button size="icon" className="fixed bottom-4 right-4 bg-transparent text-white" onClick={() => setIsDark(!isDark)}>
            {isDark ? <SunIcon /> : <MoonIcon />}
        </Button>
    </>
}

export default Switch;
