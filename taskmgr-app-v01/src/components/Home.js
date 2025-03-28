import Header from "./Header"
import Footer from "./Footer"
import { useEffect } from "react" 
function Home()
{
    useEffect(()=>{ 
        console.log("#App::Home page load")


    },[])


    return(
        <>
        <Header title="Task manager"></Header>
        
            <p>Demo Task Manager App</p>
            <p>Home Page </p>

            <Footer title="footer" year={2025}></Footer>
        </>
    );
}

export default Home; 