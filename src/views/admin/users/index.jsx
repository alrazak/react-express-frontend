//import SidebarMenu
import SidebarMenu from "../../../components/SidebarMenu";

//import Link
import { Link } from "react-router-dom";

export default function UsersIndex() {

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <SidebarMenu />
                </div>
                <div className="col-md-9">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <span>USERS</span>
                            <Link to='/admin/users/create' className="btn btn-sm btn-success rounded shadow-sm border-0">ADD USER</Link>
                        </div>
                        <div className="card-body">
                            HALAMAN USERS INDEX
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}