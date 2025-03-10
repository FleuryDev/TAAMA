import BDViewer from "./BdViewer";
import {useParams} from "react-router-dom";

export default  function ViewPage() {
    const {slug} = useParams()
    // const slug = 'la-vengeance-eternelle'; // Example slug, replace with actual slug

     return <div>
             <BDViewer slug={slug} />
         </div>

 }