import { pets } from "../data/pets";
import useUniquePets from "../custom_hook/useUniquePets";

function PetCards() {

    const uniqueNames = useUniquePets(pets)
    return (
        <>
            <div className="grid grid-rows-1 grid-flow-col gap-4 dark:bg-black">
                {uniqueNames.map((pet, index) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg dark:border-solid dark:border-2 dark:border-white-600" key={index}>
                        <img className="w-full h-80" src={pet.image} alt="Sunset in the mountains" width={200} height={200}/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 dark:text-white">{pet.name}</div>
                            <p className="text-gray-700 text-base dark:text-gray">
                                {pet.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{pet.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PetCards;