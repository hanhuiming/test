import React, { Component } from 'react'
import {BrowserRouter} from "react-router-dom"
import Footer from "./footer/footers"
import config from "../router/router.config"
import RouterView from "../router/routerview"
import "./app.css"
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouterView routes={config.routes}></RouterView>
                <Footer></Footer>
            </BrowserRouter>
        )
    }
}
