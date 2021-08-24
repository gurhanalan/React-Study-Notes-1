import styles from "./form.module.css";
import { useState } from "react";

const Form = () => {
    // State Hooks
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [country, setCountry] = useState("");

    console.log({ name, email, pass, country });

    // Functions for Fields
    const handleNameField = (e) => setName(e.target.value);
    const handleEmailField = (e) => setEmail(e.target.value);
    const handlePassField = (e) => setPass(e.target.value);
    const handleCountryField = (e) => setCountry(e.target.value);

    // Submit

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        name: ${name}, 
        email: ${email}, 
        password: ${pass}, 
        country: ${country}`);
        setName("");
        setEmail("");
        setPass("");
        setCountry("");
    };
    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                    Username{" "}
                    <input
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={handleNameField}
                    />
                </label>

                <label>
                    Email{" "}
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={handleEmailField}
                    />
                </label>
                <label>
                    Password{" "}
                    <input
                        type="password"
                        placeholder="pass"
                        value={pass}
                        onChange={handlePassField}
                    />
                </label>

                <label>
                    Country
                    <select value={country} onChange={handleCountryField}>
                        <option value="">Country</option>
                        <option value="Turkey">Turkey</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Germany">Germany</option>
                    </select>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
