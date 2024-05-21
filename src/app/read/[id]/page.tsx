
type ReadProps = {
    params: {
        id: any;
    };
};
export default function Read(props: ReadProps){
    return <>Read {props.params.id}</>
}