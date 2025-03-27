import Header from "./Header"
import Footer from "./Footer"
function Home()
{
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