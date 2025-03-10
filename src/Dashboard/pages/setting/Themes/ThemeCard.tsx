import React from 'react';

import CUSTOMTHEMES from './custom_theme.json'
import Theme from "./Themes";



function ThemeCard(props) {


          function handleChangeTheme (theme) {
        Theme.switchTheme(theme)
          }
            Theme.getElmentActive()
     return (
        <div
            className={" flex mx-auto flex-row flex-wrap rounded-lg border shadow-md hover:shadow-none transition-all duration-500 px-4 py-2 w-[calc(50%-1rem)] overflow-hidden md:w-[30%] "}>
            <div className={"flex w-full  py-2"}>

                <div style={{"backgroundColor": props.theme.primaryColor , "color":props.theme.primaryColor? props.theme.textColor : 'black'}}
                    className={`h-[6rem] w-full items-center align-middle content-around  text-white flex justify-evenly`}>
                    <p className={"uppercase"}>{props.theme.name}</p>
                </div>
                {props.children}
            </div>
            <div className={"bottom-0 w-full flex-1 mt-2 px-2 py-1 flex"}>
                <button id={props.theme.id} onClick={()=> handleChangeTheme(props.theme)}
                        className={"px-4 py-2 rounded border ml-auto hover:bg-green-500 hover:text-white transition-all duration-300"}>Activate</button>
            </div>
        </div>
    ) ;
}

export default ThemeCard;