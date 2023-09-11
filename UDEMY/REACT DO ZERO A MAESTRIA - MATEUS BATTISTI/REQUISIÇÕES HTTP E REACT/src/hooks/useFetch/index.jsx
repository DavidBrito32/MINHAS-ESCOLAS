/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    //refatorando o post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callfetch, setCallfetch] = useState(false);

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }
    }

    
    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
        }
        fetchData();
    }, [url, callfetch]);

    //refatorando o post

    useEffect(()=>{
        const httpRequest = async () => {
            if(method === 'POST'){
            let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallfetch(json);
            }
        }
        httpRequest();
        }, [config])

    return { data, httpConfig };

}