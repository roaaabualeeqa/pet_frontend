import useResource from "../custom_hook/useResource"

export default function AddPet() {

    const {addPet} = useResource();

    function submitHandler(e) {
        e.preventDefault()
        const petInfo = {
            name : e.target.name.value,
            des : e.target.des.value,
            breed : e.target.breed.value,
            owner : 2
        }
        addPet(petInfo)
    }
    return (
        <>
            <h3>Add new pet</h3>
            <form onSubmit={submitHandler}>
                <input className="border border-black" name="name" placeholder="pet name" />
                <input className="border border-black" name="breed" placeholder="breed" />
                <input className="border border-black" name="des" placeholder="des" />
                <button className="focus:outline-none text-white bg-green-700 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900" type="submit">Add</button>
            </form>
        </>
    )
}