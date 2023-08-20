import propTypes from "prop-types";
function List({ listName }) {
    return <li className="list"><a href="#" className="link">{listName}</a></li>
}

List.propTypes = {
    listName: propTypes.string.isRequired,
}


export default function Header() {
    return (
        <header className="header">
            <h1 className="logo">atlas</h1>
            <nav className="menu">
                <ul className="link">
                    <List listName="DNA" /> 
                    <List listName="Microbiome" /> 
                    <List listName="Partner with us" /> 
                    <List listName="About Atlas" /> 
                    <List listName="FAQ" /> 
                    <List listName="Upload" /> 
                </ul>
            </nav>
        </header>
    );
}