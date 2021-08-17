import styles from "./moduleBtn.module.css";

const ModuleBtn = (props) => {
    return (
        <>
            <button className={styles[props.btnClass]}>{props.btnName}</button>
        </>
    );
};

export default ModuleBtn;
