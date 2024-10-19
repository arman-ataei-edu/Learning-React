import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <footer id="footer">
            <p>This another line</p>
            <p>This another line</p>
            <p>This another line</p>
            <p className="copy">
                Powered by 
                <Link to={"https://www.w3schools.com/w3css/default.asp"}> w3css</Link>
                </p>
        </footer>
    )
}

export default Footer;