import { useRef, useState } from "react";

const Demo2 = () =>{

    let X = 0

    const [Y, setY] = useState(0)

    const ref = useRef(0);

    console.log("rendering......")

    return(
        <div className="border border-black w-96 h-96 mt-4">

            <div className="text-center font-bold text-lg">
                <h1>useRef</h1>
            </div>
            <div className="flex p-3">
                <h1>Let = {X}</h1>
                <button className="px-3 py-1 mx-3 bg-green-300 rounded-lg" onClick={()=>{
                    X=X+1
                    console.log(X)
                }}>increase</button>
            </div>

            <div className="flex p-3">
                <h1>state = {Y}</h1>
                <button className="px-3 py-1 mx-3 bg-green-300 rounded-lg" onClick={()=>{
                    setY(Y+1)
                    console.log(Y)
                }}>increase</button>
            </div>

            <div className="flex p-3">
                <h1>Ref = {ref.current}</h1>
                <button className="px-3 py-1 mx-3 bg-green-300 rounded-lg" onClick={()=>{
                    ref.current = ref.current + 1
                    console.log(ref.current)
                }}>increase</button>
            </div>
        </div>
    )
}

export default Demo2;


// render the components on update in useState...
// in normal let when increase its not render the component....
// in useRef is not update the render components but when the component render its update the useRef value.....