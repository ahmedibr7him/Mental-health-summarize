import { createContext } from "react";
import { useState } from "react";
export const LinksContext = createContext();

const LinksProvider = ({children})=>{
     const [OpenLinks , setOpenLinks] =useState(false);
         const [openLogin , setOpenLogin] =useState(false);
         const [loading, setLoading] = useState(true)
      const links =[
        { name:"Home",Link:`/home`, id:1 },
        { name:"About",Link:`/about`, id:2 },
        { name:"Summarize",Link:`/summarize`, id:3 },
        { name:"Contact Us",Link:`/contact`, id:4 },
 
    ];
   const value ={OpenLinks ,setOpenLinks ,links,openLogin,setOpenLogin,loading, setLoading}
    return(
        <LinksContext.Provider value={value}>
            {children}
        </LinksContext.Provider>
    )
}

export default LinksProvider;