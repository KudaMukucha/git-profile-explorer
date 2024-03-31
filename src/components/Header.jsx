import { NavLink } from "react-router-dom";
import DarkLightMode from "./DarkLightMode";
import logo from '../assets/logo.png'
 export default function Header() {
 
  return (
    <section className="flex items-center justify-between">
    <NavLink to={'/'} className="flex items-center gap-1">
        <img src={logo} alt="" className="w-9 h-9" />
        <span className="text-xl font-semibold">git profile explorer</span>
    </NavLink>
   {/* <DarkLightMode/> */}
</section>
  )
}
