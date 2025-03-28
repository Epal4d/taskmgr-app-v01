const Contact = () => {

    useEffect(()=>{ 
        console.log("#App::Contact page load")


    },[])
    return(
    <>

     <h1>Contact Me</h1>
     <form>
        <div>
            <span>First Name:</span> <input type="text" maxLength={25} placeholder="First Name"/><br></br> 
            <span>Last Name:</span> <input type="text" maxLength={25} placeholder="Last Name"/> <br></br>
            <span>Email:</span> <input type="text" maxLength={25} placeholder="Email"/> <br></br>
            <span>Comment:</span> <input type="text" maxLength={100} placeholder="Comment"/> <br></br>
            <button>Submit</button> <a href="#">Clear</a>
        </div>
     </form>

    </>
    )
}

export default Contact;