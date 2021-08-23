import styles from "./form.module.css";

const Form = () => {
    return (
        <div>
            <form className={styles.form}>
                <label>
                    Username <input type="text" placeholder="name" />
                </label>

                <label>
                    Email <input type="email" placeholder="email" />
                </label>
                <label>
                    Password <input type="password" placeholder="pass" />
                </label>

                <label>
                    Country
                    <select>
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
