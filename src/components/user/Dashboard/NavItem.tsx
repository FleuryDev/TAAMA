import {NavLink} from "react-router-dom";

export default function NavItem(props) {

    return  <div
        className={"flex w-full transition-all duration-300    align-baseline items-center "}>

        <NavLink className="flex w-full p-2 rounded-l-2xl hover:bg-[var(--primary-color-op-50)]" to={props.uri}>{props.children}</NavLink>
    </div>
}