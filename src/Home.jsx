import React from "react"
import { auth } from "./Firebase"
import {connect} from "react-redux"
import "./index.css"

const Home = (props) => {
    console.log("props",props)
    return (
        <div>
            <button onClick={() => auth.signOut()}>Sign Out</button>
            <div className="container">      
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Gmail</th>
                    </tr>
                    </thead>
            {
                props.user && props.user.map((item,index) => {
                    return(
                        <tbody>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                        </tr>
                        </tbody>

                    )
                })
            }
              </table>
        </div>
        </div>
    )
}
export default connect(store => store)(Home);