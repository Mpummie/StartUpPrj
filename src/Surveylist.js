import axios from "axios";
import React,{useState,useEffect} from 'react';
import './Report.css';


const Report =()=>{
    const [data, setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/app/AN");
    setData(response.data);
    };
    fetchData();
    }, []);
    


    const exportCSV = () => {
        const surveyName = "WEEKLY_PLAYLIST_SURVEY";
        const csvContent =
        "data:text/csv;charset=utf-8," +
        data.map((row) => Object.values(row).join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `${surveyName}_RESULTS.csv`);
        document.body.appendChild(link);
        link.click();
        };
        
    return(
        <>
        <br />
        <div>
        <h1 style={{ color: "green", marginTop: "30px" }}>_RESULTS</h1>
        <br />
        <table className="survey-report">
        <thead>
        <tr>
        <th>Who is your Go to Artist?</th>
        <th>An emotion evoked when listening to this Artist</th>
        <th>What is your favourite Genre?</th>
        <th>On a scale of 1 to 10, how would you rate your weekly playlist?</th>
        <th>
        Would you like to subscribe to our weekly recommended playlist of your favourite Genre?
        </th>
        <th>Your feedback is appreciated, so don't forget to give us your additional comments</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item) => (
        <tr key={item._id}>
        <td>{item.answer}</td>
        <td>{item.dropdown}</td>
        <td>
        {item.options
        .map((option) => option.name + ": " + option.value)
        .join(", ")}
        </td>
        <td>{item.ratings}</td>
        <td>{item.isChecked}</td>
        <td>{item.feedbacks}</td>
        </tr>
        ))}
        </tbody>
        </table>
        <button className="export-button" onClick={exportCSV}>
        Export as CSV
    </button>
        </div>
        </>
    )
}
export default Report;

