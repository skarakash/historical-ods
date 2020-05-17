import React, { useState, useEffect } from "react";
import "../css/AuthPage.css";
import { Form, Button } from "react-bootstrap";
import { useHttp } from "../hooks/http.hook";

export const AuthPage = () => {
    const { request, error } = useHttp();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {}, [error]);

    const handleFormChange = (event) => {
        event.preventDefault();
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleRegistration = async () => {
        try {
            const data = await request("api/auth/register", "POST", {
                ...form,
            });
            console.log(data);
        } catch (error) {}
    };

    return (
        <div className="container">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleFormChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleFormChange}
                    />
                </Form.Group>

                <Form.Group
                    controlId="formBasicPassword"
                    className="buttons__wrapper"
                >
                    <Button variant="primary" onClick={handleRegistration}>
                        Sign Up
                    </Button>

                    <Button variant="primary">Sign In</Button>
                </Form.Group>
                <Form.Group>{error}</Form.Group>
            </Form>
        </div>
    );
};
