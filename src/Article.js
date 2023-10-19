export default function Article(props){
    return(
        <article>
            <h1>{props.title}</h1>
            {props.desc}
        </article>
    );
}