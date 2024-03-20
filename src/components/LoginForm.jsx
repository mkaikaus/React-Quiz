import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Login.module.css";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { login } = useAuth();
    const navigate = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        //
        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate("/");

        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to login!");
        }
    }

    return (
        <>
            <Form className={`${classes.login}`} onSubmit={handleSubmit}>
                <TextInput type="text"
                    required
                    placeholder="Enter email"
                    icon="alternate_email"
                    value={email}
                    onChange={(e) => {
                        // console.log(e.target.value)
                        setEmail(e.target.value)
                    }} />
                <TextInput type="password"
                    required
                    placeholder="Enter password"
                    icon="lock"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button disabled={loading} type="submit"><span>Log In</span></Button>
                <div className="info">Don't have an account? <Link to="./signup">Sign Up</Link> instead.
                </div>
            </Form>
        </>
    );
}