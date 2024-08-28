import useResource from "../custom_hook/useResource"

export default function PetList() {

    const { resource, loading, deleteFun } = useResource();
    if (loading) return <p>Loading ...</p>
    return (
        <>
            <h3>Pet List</h3>
            {resource.map(item => (
                <li key={(item.id)}>

                    <button onClick={() => deleteFun(item.id)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">X</button>
                    <span>{item.name}</span>
                </li>
            ))}
        </>
    )
}