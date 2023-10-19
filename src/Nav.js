export default function Nav(props){
    const list  = props.data.map((data) => {
        return(
            <li key={data.id} onClick={(e) => {
                e.preventDefault();
                props.onChangePage(e.target.innerHTML);
            }}>
                <a href="/">{data.title}</a>
            </li>
        )
    })
    return(
        <ul>
            {list}
        </ul>
    )
}