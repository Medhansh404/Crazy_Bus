import React from "react";
import "./profile.css";
import Header from "./Header";

const Profile = () => {
    const imageStyle = {
        width: "600px",
    };
    return (
        <div>
        <div>
            <Header />
        </div>
        <div className="containers bootstrap snippets bootdey">
            <div className="panel-body inf-content">
                <div className="row">
                    <div className="col-md-6">
                        <div className="center-content">
                            <strong className="heading">Profile</strong>
                            <br />
                            <div className="table-responsive">
                                <table className="table table-user-information">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <strong> 
                                                    Roll Number :
                                                </strong>
                                            </td>
                                            <td className="text-primary">21UCS060</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                
                                                    Name :
                                                </strong>
                                            </td>
                                            <td className="text-primary">Devansh Jain</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                
                                                    Email :
                                                </strong>
                                            </td>
                                            <td className="text-primary">21ucs060@lnmiit.ac.in</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                
                                                    Role :
                                                </strong>
                                            </td>
                                            <td className="text-primary">Student</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                
                                                    Parent Name :
                                                </strong>
                                            </td>
                                            <td className="text-primary">Anil Jain</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                
                                                    Mobile Number :
                                                </strong>
                                            </td>
                                            <td className="text-primary">7023624338</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                
                                                    Hostel :
                                                </strong>
                                            </td>
                                            <td className="text-primary">BH-3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button className="logout-button">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Profile;
