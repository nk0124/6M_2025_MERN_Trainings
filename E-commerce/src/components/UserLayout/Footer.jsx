
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="copyright p-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-start">
                            <p className="my-0 pe-3">
                                Copyright <span className="pe-2">&copy;</span>
                                <a href="#" className="pe-2 fs-5">Click-Cart</a>
                                All Rights Reserved
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-end">
                            <p>
                                Designed by <span className="h1">Neeta Kumari</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
