import "../../css/card.css"
import { CardLenguage } from "./CardLenguage"

import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";



export function CardBackend() {
  return (
    <section className="w-70 h-90 bg-[var(--color-card)] rounded-2xl card">
      <h3 className="text-2xl py-2 font-bold">Backend</h3>
      <div className="flex flex-wrap w-full items-center justify-center gap-5 p-5 ">
        <CardLenguage icon={<FaNodeJs size={40} color="#13ad13" />} text="NodeJS" />
        <CardLenguage icon={<SiExpress size={40} color="#000000" />} text="Express" />
        <CardLenguage icon={<SiSqlite size={40} color="#0081bd" />} text="Sqlite" />
        <CardLenguage icon={<BiLogoPostgresql size={40} color="#2496ED" />} text="Postgres" />
        <CardLenguage icon={<SiMongodb size={40} color="#47A248" />} text="MongoDB" />
      </div>
    </section>
  )
}
