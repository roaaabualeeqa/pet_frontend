import { useState } from "react";
import { replies } from "../data/replies";
import Toast from "./Toast";

function Form() {

    const [showFlag, setShowFlag] = useState(false)
    const [replyVar, setReplyVar] = useState("")

    const handleClose = () => {
        setShowFlag(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const pet_name = e.target.petname.value
        const reply = replies.reduce((acc, item)=> {
           if (item[pet_name])
            acc = item[pet_name]
        return acc
        }, "")

        setReplyVar(reply)

        setShowFlag(true)


    }
    return (
        <>
            <div className="flex items-center justify-center dark:bg-black"> 
                <div className="w-full max-w-xs">
                    <form onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patname">
                                Pet Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name="petname" type="text" placeholder="Name" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-cyan-900 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Guess
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            {showFlag && <Toast message={replyVar} closeFun={handleClose}/>}

        </>
    )
}

export default Form;