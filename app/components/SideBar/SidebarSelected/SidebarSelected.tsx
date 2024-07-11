'use client'
import styles from "./SidebarSelected.module.scss"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function SidebarSelected() {

    const path = usePathname();
    const [position, setPosition] = useState("151px");

    useEffect(() => {
        switch (path) {
            case "/":
                setPosition("151px");
                break;
            case "/artists":
                setPosition("195px");
                break;
            case '/albums':
                setPosition("240px");
                break;
            case "/songs":
                setPosition("284px");
                break;
            case "/playlist":
                setPosition("407px");
                break;
            case "/specials":
                setPosition("451px");
                break;
            case "/favorites":
                setPosition("496px");
                break;
            case "/podcasts":
                setPosition("540px");
                break;
            default:
                setPosition("151px");
        }
    }, [path])

    return (
        <div className={styles.main} style={{
            top: position
        }}>
        </div>
    )
}