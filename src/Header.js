export default function Header(props){
    return(
        <header>
            <h1>
                <a href="/" onClick={(e) => {
                    e.preventDefault();
                    props.onChangePage();
                }}>{props.title}</a>
            </h1>
            {props.sub}
        </header>
    );
}