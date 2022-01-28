
export default function About() {

    function register(e) {
        e.preventDefault();
        console.dir(e.target)
    }
    
    return(
        <>
            About us
            <br /><br />
            <form onSubmit={register}>
                <input type="text" name='nome' placeholder="your name" /> <br /><br />
                <button type="submit">Save</button>
            </form>
        </>
    );
}