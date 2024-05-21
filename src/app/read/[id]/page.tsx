
type ReadProps = {
    params: {
        id: any;
    };
};
export default async function Read(props: ReadProps){
    const resp = await fetch(`http://localhost:9999/pages/${props.params.id}`);
    const data = await resp.json();
    return <>
        <h2>{data.title}</h2>
        {data.body}
    </>
}