import "./gradeform.css"



function Gradeform ()
{
    return(
        <div className="Container">
            <h1>Report Missing Grade</h1>
            <form>
            <input placeholder="Course Name"/>
            <input placeholder="Lecturer Name"/>
            <input placeholder="Expected Grade"/>
            <textarea placeholder="Explanation Field" rows="4"></textarea>
            <button type="submit">Submit</button>


            </form>
             
         
              
        </div>

    )
}




export default Gradeform