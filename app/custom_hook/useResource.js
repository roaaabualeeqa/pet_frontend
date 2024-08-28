import { useContext } from "react";
import { AuthContext } from "../context/auth";
import axios from "axios";
import useSWR from "swr";

export default function useResource(){

    // const apiUrl = 'http://127.0.0.1:8000/api/v1/pets/';
    const apiUrl = process.env.NEXT_PUBLIC_API_URL+'api/v1/pets/';
    console.log('url',apiUrl)
    const {tokens} = useContext(AuthContext);
    const {data, error, mutate} = useSWR([apiUrl,tokens],fetchResourse)

    async function fetchResourse(){
        if (!tokens) {
            return;
        }
        try {
            console.log("Auth data",config())
            const res = await fetch(apiUrl, config())
            const resJSON = await res.json()
            console.log(resJSON)
            return resJSON;
        }
        catch(err){
            handleError(err)
        }
    }

    async function deleteResource(id) {
        try {
           const url = apiUrl+id
           console.log(url)
           const options = config()
           options.method = "DELETE"
           console.log(options)
           await fetch(url, options)
           mutate()

        }
        catch(err){
            handleError(err)
        }
    }

    async function createResource(petInfo){
        if(!tokens) {
            return;
        }
        try{
            const options = config()
            options.method = "POST"
            options.body = JSON.stringify(petInfo)
            await fetch(apiUrl,options)
            mutate()

            
        }
        catch(err){
            handleError(err)
        }
    }

    function handleError(err){
        console.log(err);
        // logout();
    }

    function config() {
        return {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + tokens.access
            }
        }
    }

    return {
        resource : data,
        deleteFun : deleteResource,
        addPet : createResource,
        loading: tokens && !error && !data
    }
}