import MobileNav from './MobileNav';
import { Nav } from './Nav';
import SignInUpPopup from "./user/SignInUpPopup";

/**
 * Header of Application
 * @param {string} AppName 
 * @param {Array} navigation
 * @returns 
 */
function Header({ AppName, navigation, }) {

    return <header className='max-md:px-1 backdrop-blur-md text-md bg-white'>
        <div className="app-title flex">
            <img src="/logo.png" className='' alt="" />
        </div>
        <div className='flex flex-auto my-auto  align-baseline  justify-end'>

            <Nav NavItems={navigation} />
            <MobileNav links={navigation} />
            <SignInUpPopup/>
        </div>


    </header>
}

export default Header