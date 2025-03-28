import Header from "./Header"
import Footer from "./Footer"
import { useEffect } from "react" 
function Home()
{
    const [tmplist, setTodoList]


    useEffect(()=>{ 
        console.log("#App::Home page load")

        // setTodoList(tmplist)
        // console.log("---todolist/n",todolist)


    },[])

    const initial_todo_items = [
        {id:1,name:"item 1", completed:false}
        {id:2,name:"item 2", completed:false}
        {id:3,name:"item 3", completed:false}
        {id:4,name:"item 4", completed:false}
    ]


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