import { useState } from "react";

const Demo = () =>{

    const [darkBg, setDarkBg] = useState(false)

    return (
        <div className={" border border-gray-700 w-72 h-96 mx-4" + (darkBg && "bg-gray-900 text-white")}>
            <div className="font-bold p-4 text-center ">
                useMemo
            </div>
            <button className="px-4 py-1 bg-green-300 mx-4 rounded-lg" onClick={()=>{
                setDarkBg(!darkBg)
            }}>Dark Mode</button>
        </div>
    )
}

export default Demo;