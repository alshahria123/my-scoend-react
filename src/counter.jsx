import { useState } from "react"

export default function Counter (){
    const [count, satCount] = useState(0);
    const handelAdd = () => {
        const newCount = count + 1;

        satCount(newCount)
    }

    const counterStyle = {
        border: '2px solid red'
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handelAdd}>Add</button>
        </div>
    )
}