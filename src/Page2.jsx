import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page2({ studDetails, setStudDetails, subs, setSubs }){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        sub_name: "", 
        theory_mks: "",
        ica_mks: "",
        credits: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/marks-details");
    }

    const handleSemChange = (e) => {
        setStudDetails((prev) => ({ ...prev, sem: e.target.value}))
    }

    const handleAddSub = (e) => {
        e.preventDefault();
        setSubs((prev) => [ ...prev, { ...formData, sem: studDetails.sem }])

        setFormData({ sub_name: "", theory_mks: "", ica_mks: "", credits: ""})
    }


    return(
        <>
         	<form onSubmit={handleSubmit}  className="m-6 max-w-md mx-auto">
                <div className='w-full p-6 bg-white rounded-lg shadow-2xl shadow-black/20'>
		            <div className=" flex flex-col ">

                    <h2>Add Subjects:</h2>
            
                    <label className="" >Select Sem:</label>
                    <select onChange={handleSemChange} value={studDetails.sem}>
                        <option value="Sem1">Sem 1</option>
                        <option value="Sem2">Sem 2</option>
                        <option value="Sem3">Sem 3</option>
                        <option value="Sem4">Sem 4</option>
                        <option value="Sem5">Sem 5</option>
                    </select>

                    <label className="">Subject Name</label>
                    <input type="text" onChange={handleChange} name="sub_name" className="border" value={formData.sub_name}/>

                    <label className="">Theory Marks</label>
                    <input type="text" onChange={handleChange} name="theory_mks" className="border" value={formData.theory_mks}/>
                    
                    <label className="">ICA Marks</label>
                    <input type="text" onChange={handleChange} name="ica_mks" className="border" value={formData.ica_mks}/>

                    <label className="">Credits</label>
                    <input type="text" onChange={handleChange} name="credits" className="border" value={formData.credits}/>
                    
                    <button type="button" onClick={handleAddSub} className="bg-red-100 rounded-lg w-full p-2 mt-2">Add</button>
                    <button type="button" onClick={() => navigate("/marks-details")}>Show</button>
                    

                </div>
            </div>
            </form>
        </>

    );
   
}