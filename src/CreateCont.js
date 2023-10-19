const CreateCont = (props) => {
    return(
        <div>
            <h1> Create </h1>
            <form action="/create_pro" method="post" onSubmit={(e) => {
                e.preventDefault();
                console.log(e.target.title);
                props.onSubmit(e.target.title.value, e.target.cont.value);
                e.target.title.value = '';
                e.target.cont.value = '';
            }}>
                <input name="title" placeholder="title" />
                <input name="cont" placeholder="contents" />
                <p>
                <button type="submit">제출</button>
                </p>
            </form>
        </div>
    )
}
export default CreateCont;