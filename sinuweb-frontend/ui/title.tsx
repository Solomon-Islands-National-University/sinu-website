import { Raleway } from "next/font/google";

const railway = Raleway({ subsets: ["latin"], weight: ["400","800"]});

function Title({children}: any) {
    return (
        
        <h1 className={`${railway.className} text-massive font-bold capitalize leading-3`}>
            {children}            
        </h1>
    );
}

export default Title;