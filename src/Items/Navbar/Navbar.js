import React from "react"
import './Navbar.css'

export default function  Navbar() {
    return(
    <div className="Navbar">
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Heroes App</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body" id="offcanvas-body">
                <ul className=" justify-content-center">
                    <li className="col-8" id="list-element">Marvel List</li>
                    <li className="col-8" id="list-element">DC List</li>
                    <li className="col-8" id="list-element">Others</li>
                </ul>
            </div>
        </div>
    </div>
    )
}
