const Contact = () => {
    return(
    <>

     <h1>Contact Me</h1>
     <form>
        <div>
            <span>First Name:</span> <input type="text" maxlength={25} placeholder="First Name"/> 
            <span>Last Name:</span> <input type="text" maxlength={25} placeholder="Last Name"/> 
            <span>Email:</span> <input type="text" maxlength={25} placeholder="Email"/> 
            <span>Comment:</span> <input type="text" maxlength={100} placeholder="Comment"/> 
            <button>Submit</button> <a href="#">Clear</a>
        </div>
     </form>

    </>
    )
}

export default Contact;