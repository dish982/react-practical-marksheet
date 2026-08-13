import { useNavigate } from 'react-router-dom';

export default function Page1({ studDetails, setStudDetails }){

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value } = e.target;
        setStudDetails((prev) => ({ ...prev, [name]: value, }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/add-subs");
    }


    return(
        <>
         	<form onSubmit={handleSubmit}  className="m-6 max-w-md mx-auto">
                <div className='w-full p-6 bg-white rounded-lg shadow-2xl shadow-black/20'>
		            <div className=" flex flex-col ">

                    <h2>Enter your personal details:</h2>
            
                    <label className="" >SAP ID</label>
                    <input type="text" onChange={handleChange} name="sid" className="border" />
                    <label className="">Name</label>
                    <input type="text" onChange={handleChange} name="sname" className="border"/>
                    <label className="">Roll No.</label>
                    <input type="text" onChange={handleChange} name="rollno" className="border"/>
                    <label className="">Course</label>
                    <input type="text" onChange={handleChange} name="course" className="border"/>
                    <button type="submit" className="bg-red-100 rounded-lg w-full p-2 mt-2">Next</button>
                    

                </div>
            </div>
            </form>
        </>

    );
   
}