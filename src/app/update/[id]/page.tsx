'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Update(props){
    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    const [page, setPage] = useState({});
    console.log('page rendering', page);
    const router = useRouter();
    useEffect(()=>{
        fetch('http://localhost:9999/pages/'+props.params.id)
            .then(resp=>resp.json())
            .then(result=>{
                console.log('id', result)
                setPage({
                    title:result.title,
                    body:result.body
                })
            })
    },[])
    async function handleSubmit(evt){
        evt.preventDefault()
        const {title, body} = page;
        const option = {
            method:'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title,
                body
            })
        }
        const resp = await fetch('http://localhost:9999/pages/'+props.params.id, option);
        const data = await resp.json();
        router.refresh();
        router.push(`/read/${data.id}`);

        
    }
    return <>
        <h2>Update</h2>
        <form onSubmit={handleSubmit}>
            <p>
                <input type="text" name="titleInput" placeholder="title" value={page.title}
                    onChange={(evt)=>{
                        const value = evt.target.value;
                        const newPage = {...page}
                        newPage.title = value;
                        setPage(newPage);
                    }}
                />
            </p>
            <p><textarea name="bodyInput" placeholder="body" value={page.body} 
                onChange={evt=>{
                    const value = evt.target.value;
                    const newPage = {...page}
                    newPage.body = value;
                    setPage(newPage);
                }}
            ></textarea></p>
            <p><input type="submit" /></p>
        </form>
    </>
}