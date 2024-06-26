/* eslint-disable react/prop-types */
import classes from '../styles/TextInput.module.css';


const TextInput = ({ icon, ...rest }) => {
    // const {icon, placeholder, type} = props;
    return (
        <div className={classes.textInput}>
            <input {...rest} />
            <span className="material-icons-outlined"> {icon} </span>
        </div>
    );
}

export default TextInput
