import { useState } from "react";

export default function UpdateCont(props){
    const [title, setTitle] = useState(props.data.title);
    const [cont, setCont] = useState(props.data.desc);
    return(
        <div>
            <h1> Update </h1>
            <form action="/update_pro" method="post" onSubmit={(e) => {
                e.preventDefault();
                // props.onChangeMode('update');
                props.onSubmit(e.target.title.value, e.target.cont.value);
                e.target.title.value = '';
                e.target.cont.value = ''; 
            }}>
                <input name="title" value={title} onChange={(e) => {
                    setTitle(e.target.value);
                    // console.log(e.target.value);
                    return e.target.value;
                }}/>
                <input name="cont" value={cont} onChange={(e) => {
                    setCont(e.target.value);
                    // console.log(e.target.value);
                    return e.target.value;
                }}/>
                <p>
                <button type="submit">제출</button>
                </p>
            </form>
        </div>
    );
}