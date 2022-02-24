import { useState } from "react";

export const usePostJob = () => {
    const [jobs, setJobs] = useState([]);
    const addJob = async({ postJob }) => {

        const response = await fetch(`http://localhost:8001/v1jobs/job`, {
            method: "POST",
            headers: {

                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ postJob }),
        });
        const currJobs = await response.json();
        console.log(jobs);
        setJobs(jobs.concat(currJobs));
    }
    return { addJob }
}