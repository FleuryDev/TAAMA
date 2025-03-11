import { NavLink } from 'react-router-dom';

export function Nav({ NavItems }) {
    const a = [];

    for (let link of NavItems) {
        // a.push(<Link link={link} key={link.name}  />);
        a.push(

            <NavLink className={"max-lg:hidden"} to={link.uri} key={link.name} > <span translate='no' className='material-icons'>{link.icon && link.icon}</span> {link.name}</NavLink>
        );
    }
    return <nav className="app-nav align-middle max-lg:hidden">

        {a}
    </nav>;
}
