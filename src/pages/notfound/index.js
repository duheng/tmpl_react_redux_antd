import React, {Component} from "react"
import {Link} from "react-router-dom"
import styles from "./style"

export default class Notfound extends Component {
    render() {
        return (
            <div className="about">
                <Link to="/" className="link">
                    404也迷啊
                </Link>
            </div>
        )
    }
}
