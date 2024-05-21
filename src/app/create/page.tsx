'use client'

import { headers } from "next/headers";
import { useRouter } from "next/navigation";

export default function Create(){
    const router = useRouter();
    async function handleSubmit(evt){
        evt.preventDefault();
        const title = evt.target.titleInput.value;
        const body = evt.target.bodyInput.value;
        const option = {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title,
                body
            })
        }
        const resp = await fetch('http://localhost:9999/pages',option);
        const data = await resp.json();
        router.refresh();
        router.push(`/read/${data.id}`);
    }
    return <>
        <h2>Create</h2>
        <form onSubmit={handleSubmit}>
            <p>
                <input type="text" name="titleInput" placeholder="title" />
            </p>
            <p><textarea name="bodyInput" placeholder="body" ></textarea></p>
            <p><input type="submit" /></p>
        </form>
    </>
}