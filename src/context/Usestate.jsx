import { createContext, react} from 'react'

export const usercontext = createContext()

const Usestate = ({children})=>{
   let data={
        
    };


    <usercontext.Provider value={data}>
            {children}
    </usercontext.Provider>
}

export default Usestate;