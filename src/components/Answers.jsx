import { Fragment } from 'react';
import classes from '../styles/Answer.module.css';
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handleChange, input }) {
    // const {className, text} =props;
    return (
        <div className={classes.answer}>
            {options.map((option, index) => (
                <Fragment key={index}>
                    {input ? (
                        <Checkbox
                            key={index}
                            className={classes.answer}
                            text={option.title}
                            value={index}
                            checked={option.checked}
                            onChange={(e) => handleChange(e, index)}
                        />
                    ) : (
                        <Checkbox
                            key={index}
                            className={`${classes.answer} ${option.correct
                                ? classes.correct
                                : option.checked
                                    ? classes.wrong
                                    : null
                                }`}
                            text={option.title}
                            value={index}
                            defaultChecked={option.checked}
                            disabled
                        />
                    )}
                </Fragment>
            ))}
        </div>
    );
}