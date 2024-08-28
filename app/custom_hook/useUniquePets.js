function useUniquePets(arr) {
    const uniqueNames= new Set();
    const filteredArray = arr.filter(obj => {
        if(uniqueNames.has(obj.name)){
            return false
        } 
        else {
            uniqueNames.add(obj.name)
            return true
        }
    });
    console.log(filteredArray)
    return filteredArray

}

export default useUniquePets;