import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import Button from './Button';
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { signup } = useAuth();
    const navigate = useHistory();

    async function handleSubmit(e) {
        console.log("Checking submit button")
        e.preventDefault();
        //
        if (password !== confirmPassword) {
            return setError("Passwords don't match!");
        }

        try {
            console.log(email, password);
            // break;
            setError("");
            setLoading(true);
            await signup(email, password, username);
            // console.log("Credential Given");
            navigate("index.html");

        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to create an account!");
        }
    }



    return (
        <>
            <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
                <TextInput type="text"
                    required
                    placeholder="Enter name"
                    icon="person"

                    value={username}
                    onChange={(e) => {
                        // console.log(e.target.value)
                        setUsername(e.target.value)
                    }}
                />
                <TextInput type="email"
                    required
                    placeholder="Enter email"
                    icon="alternate_email"
                    value={email}
                    onChange={(e) => {
                        // console.log(e.target.value)
                        setEmail(e.target.value)
                    }}
                />
                <TextInput type="password"
                    required
                    placeholder="Enter password"
                    icon="lock"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <TextInput type="password"
                    required
                    placeholder="Confirm password"
                    icon="lock_clock"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                <Checkbox
                    text="I agree to the Terms &amp; Conditions"
                    required
                    value={agree} onChange={(e) => setAgree(e.target.value)}
                />

                <Button disabled={loading} type="submit">
                    <span>Submit Now</span>
                </Button>

                {/* <button disabled={loading} onClick={(e) => { handleSubmit(e) }} type="submit"><span>Sign Up</span></button> */}

                {error && <p className="error">{error}</p>}

                <div className="info">
                    Already have an account? <Link to="/login">Login</Link> instead.
                </div>
            </Form>
        </>
    );
}