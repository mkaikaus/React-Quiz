import classes from "../styles/Illustration.module.css"

export default function Illustration(props) {
    // eslint-disable-next-line react/prop-types
    const {src, alt} = props;
    return (
        <div className={classes.illustration}>
            <img src={src} alt={alt} />
        </div>
    );
}


// const TextInput = (props) => {
//     const {icon, placeholder, type} = props;
//     return (
//         <div className={classes.textInput}>
//             <input placeholder={placeholder} type = {type}/>
//             <span className="material-icons-outlined"> {icon} </span>
//         </div>
//     );
// }