import { useNavigate } from "react-router-dom";


export default function Marksheet({ subs, studDetails }){

    const navigate = useNavigate()

    const semSubs = subs.filter((sub)=> sub.sem === (studDetails.sem))

    const getGradeInfo = (marks) => {
        if (marks >= 90) return { grade: 'O', point: 10 };
        if (marks >= 80) return { grade: 'A+', point: 9 };
        if (marks >= 70) return { grade: 'A', point: 8 };
        if (marks >= 60) return { grade: 'B+', point: 7 };
        if (marks >= 55) return { grade: 'B', point: 6 };
        if (marks >= 50) return { grade: 'C', point: 5 };
        if (marks >= 40) return { grade: 'P', point: 4 };
        return { grade: 'F', point: 0 };
    };

    let totalMarks = 0;
    let totalCredits = 0;
    let totalPnts = 0;

    return (
        <>
        <div>
            <h1>Marksheet</h1>
            <div className="flex justify-between text-sm font-semibold border-b pb-3 mb-4 text-gray-700">
            <p>Name: {studDetails.sname}</p>
            <p>SAP: {studDetails.sid}</p>
            <p>Course: {studDetails.course}</p>
            <p>Sem: {studDetails.sem}</p>
            </div>

            <table className="w-full border border-gray-300 text-center text-sm mb-4">
                <thead className="bg-gray-100 border-b">
                    <tr>
                    <th className="p-2 border">Subject</th>
                    <th className="p-2 border">Theory</th>
                    <th className="p-2 border">ICA</th>
                    <th className="p-2 border">Total</th>
                    <th className="p-2 border">Grade</th>
                    <th className="p-2 border">Point</th>
                    <th className="p-2 border">Credits</th>
                    </tr>
                </thead>

                <tbody>
                    {semSubs.length === 0 ? (
                        <tr>
                            <td>No subs added</td>
                        </tr>
                    ) : (
                        semSubs.map((sub, index) => {
                            const total = Number(sub.theory_mks) + Number(sub.ica_mks)
                            const credits = Number(sub.credits)
                            const { grade, point} = getGradeInfo(total)

                            totalMarks +=total
                            totalCredits += credits
                            totalPnts += point * credits

                            return (
                                <tr key={index}>
                                    <td>{sub.sub_name}</td>
                                    <td>{sub.theory_mks}</td>
                                    <td>{sub.ica_mks}</td>
                                    <td>{total}</td>
                                    <td>{grade}</td>
                                    <td>{point}</td>
                                    <td>{credits}</td>

                                </tr>
                            );
                        })
                    )
                }
                </tbody>

                
            </table>
    
            <div className="text-center text-sm font-bold text-gray-800 space-y-1 mb-6">
                <p>Total Marks: {totalMarks}</p>
                <p>Total Credits: {totalCredits}</p>
                <p>
                    SGPA: {totalCredits > 0 ? (totalPnts / totalCredits).toFixed(2) : "0.00"}
                </p>
            </div>

            <button
            onClick={() => navigate("/add-subs")}
            className="w-full bg-slate-800 text-white font-semibold py-2 rounded-lg hover:bg-slate-900 transition"
            >
            + Add More Subjects
            </button>


        </div>
        </>
    );
}