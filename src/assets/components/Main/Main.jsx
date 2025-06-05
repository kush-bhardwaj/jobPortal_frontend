
import MainHeader from "../header/Header";
export default function Main({children}){
    return (
        <>  
            <MainHeader />
            {children}
        </>
    )
}
