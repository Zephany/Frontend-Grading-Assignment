import "./login.css"


function Logins ()
{
    return(
        <>
        <div className="welcome">
        
      </div>
      <div className="container">
        <div className="header">
          <div className="text">Log In</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              placeholder="Student ID"
              name="email-address"
              id="email-address"
              
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              
            />
          </div>
        </div>
        <div className="forgot-password">
          Reset Password <span>Click Here</span>
        </div>
        <div className=" submit-container">
          
               <a>

               <div className="submit1">Login</div>
               </a>
         
        </div>
        
      </div>
      </>
    )
}

export default Logins