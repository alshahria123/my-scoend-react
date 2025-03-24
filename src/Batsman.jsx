import { useState } from "react"

export default function Batsman (){
    const [runs, setRuns] = useState(0);

    const handleSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns)
    }
    const handleTwo = () => {
        const updateRuns = runs + 2;
        setRuns(updateRuns)
    }
    const handleThree = () => {
        const updateRuns = runs + 3;
        setRuns(updateRuns)
    }
    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns)
    }
    const handleSix = () => {
        const updateRuns = runs + 6;
        setRuns(updateRuns)
    }


    return(
        <div>
            <h3>player: Bangla Batsman</h3>
            <h1>Score: {runs}</h1>
            {
                runs > 50 && <p>You Score 50</p>
            }
            {
                runs >100 && <p>You Score 100</p>
            }
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleTwo}>tow</button>
            <button onClick={handleThree}>three</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}