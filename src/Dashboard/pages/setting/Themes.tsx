import React from 'react';
import ThemeCard from "./Themes/ThemeCard";
import CUSTOM_THEMES from './Themes/custom_theme.json'
import Theme from "./Themes/Themes";
function Themes(props) {
    const  elm =[]

    if (CUSTOM_THEMES){

        for (let customthemesKey in CUSTOM_THEMES) {

            elm.push(
                <ThemeCard theme={CUSTOM_THEMES[customthemesKey]} key={CUSTOM_THEMES[customthemesKey].id}>

                </ThemeCard>
            )
        }
    }

    return (
        <div  className={"flex w-full flex-wrap gap-4 p-8  align-baseline items-center"}>
            { elm
            }

                    </div>
    );
}

export default Themes;