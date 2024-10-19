import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <footer id="footer">
            <div>
                <p>Entry 11</p>
                <p>Entry 21</p>

            </div>
            <div>
                <p>Entry 12</p>
                <p>Entry 22</p>

            </div>
            <div>
                <p>Entry 13</p>
                <p>Entry 23</p>
            </div>
            <p className="copy">
                Powered by 
                <Link to={"https://www.w3schools.com/w3css/default.asp"}> w3css</Link>
                </p>
        </footer>
    )
}

export default Footer;