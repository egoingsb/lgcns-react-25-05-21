'use client';
import Link from "next/link";
import { useParams } from "next/navigation";

export function ContextMenu(){
    const params = useParams();
    if(params.id === undefined){
        return null;
    }
    return <>
        <li><Link href="/update/id">Update</Link></li>
        <li><button>Delete</button></li>
    </>
}