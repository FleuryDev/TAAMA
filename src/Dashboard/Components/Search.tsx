import {Fragment} from "react";

export default function Search({_class}:{_class: any}) {
    return <Fragment>
        <div className="flex backdrop-blur-md  bg-transparent">
            <input type="search" name="ser" placeholder="Type anything"
                   className={"outline-none border-b transition transition-all duration-1000 focus:w-[20rem] focus:transition focus:transition-all focus:duration-1000 "}
                   id=""/>
            <button className="p-1 px-4  rounded-2xl bg-[var(--primary-color)] text-white">Search</button>
        </div>
    </Fragment>
}