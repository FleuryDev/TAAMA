
/**
 * Link Component
 * @param {{uri:null,
 * name : null,
 * className : null
 * }} link 
 * @returns 
 */
export function Link({link}) {
    return <a className={link.className} href={link.uri}>{link.name}</a>;


}
