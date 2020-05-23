import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";

import { QueryRes } from "../components/QueryRes"
import { TempStats } from "../components/TempStats"

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/StatsPage.css"


export const StatsPage = () => {

    const { request, error } = useHttp();
    const [form, setForm] = useState({
        hOdds: null,
        dOdds: null,
        aOdds: null,
        o2_5: null
    });

    const [res, setRes] = useState(null);

    const handleFormChange = (event) => {
        event.preventDefault();
        setForm({ ...form, [event.target.name]: Number(event.target.value) });
    };

    const handleSubmit = async () => {
        try {
            const data = await request("api/match/matches", "POST", {
                ...form,
            });

            setRes(data)
        } catch (error) { }
    }

    return (
        <div>
            <form className="oddsForm">
                <p className="formControl">
                    <input
                        placeholder="home team odds"
                        name="hOdds"
                        autoComplete="off"
                        type="number"
                        novalidate
                        onChange={handleFormChange}
                    />
                </p>
                <p className="formControl">
                    <input
                        type="number"
                        placeholder="draw odds"
                        name="dOdds"
                        autoComplete="off"
                        onChange={handleFormChange}
                    />
                </p>
                <p className="formControl">
                    <input
                        type="number"
                        placeholder="away team odds"
                        name="aOdds"
                        autoComplete="off"
                        onChange={handleFormChange}
                    />
                </p>
                <p className="formControl">
                    <input
                        type="number"
                        placeholder="over 2.5"
                        name="o2_5"
                        autoComplete="off"
                        onChange={handleFormChange}
                    />
                </p>

                <button onClick={handleSubmit}>
                    Submit
                </button>
            </form>
            <QueryRes data={res} />
            <TempStats data={res} />
        </div>
    );
};
