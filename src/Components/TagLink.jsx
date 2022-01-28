export default function TagLink(props) {
    return(
        <>
            <span {...props} style={{color: 'purple', fontWeight: 'bold', cursor: 'pointer'}}>{props.children}</span>
        </>
    );
}