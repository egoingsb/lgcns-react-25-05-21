'use client';
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function ContextMenu(){
    const router = useRouter();
    const params = useParams();
    if(params.id === undefined){
        return null;
    }
    return <>
        <li><Link href="/update/id">Update</Link></li>
        <li><button onClick={async ()=>{
            await fetch(`http://localhost:9999/pages/${params.id}`,{
                method:'DELETE'
            });
            router.push('/');
            router.refresh();
        }}>Delete</button></li>
    </>
}