import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Art from "./Art";


const ArtCraft = () => {
    const artCraft=useLoaderData()
    
    return (
        <div>
           
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-12 gap-4">
          <Fade
        cascade={true}
        damping={0.5}
        
        
      >
          {
            artCraft.map(art=><Art key={art._id} art={art}></Art>)

           }
           </Fade>
          </div>
            
        </div>
    );
};

export default ArtCraft;