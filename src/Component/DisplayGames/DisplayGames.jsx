import React from "react";
import { Link } from "react-router-dom";
import "./DisplayGames.css";

export default function DisplayGames({ info }) {
    return <>
        <div className="col-md-4">
            <Link to={'/gamedetails/'+info.id}>
                <div className="game card mb-4 grow shadow">
                    <div className="game-image">
                        <img
                            alt=""
                            className="w-100"
                            src={info.thumbnail}
                        />
                    </div>
                    <div className="game-body p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="card-title text-truncate text-white">{info.title}</h4>
                            <span className="badge badge-span py-2 px-2 float-right">
                                FREE
                            </span>
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    </>
}
