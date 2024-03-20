import { useMemo } from "react";
import Success from '../assests/images/success.png';
import useFetch from '../hooks/useFetch';
import classes from '../styles/Summary.module.css';

export default function Summary({ score, noq }) {
    const getKeyword = useMemo(() => {
        if ((score / (noq * 5)) * 100 < 50) {
            return "failed";
        }
        else if ((score / (noq * 5)) * 100 < 75) {
            return "good";
        }
        else if ((score / (noq * 5)) * 100 < 100) {
            return "very good";
        }
        else {
            return "excellent";
        }
    }, [score, noq]);

    const { loading, error, result } = useFetch(
        `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
        "Get",
        {
            Authorization: "pI2O7NUdv2SaiDvd6YtatbV8PtolD1YJgDfH0ohSes4k9KRCbT4nXvwz",
        }
    );

    const image = result ? result?.photos[0].src.medium :
        Success;

    return (
        <div className={classes.summary}>
            <div className={classes.point}>
                <p className={classes.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>

            {error && <div className={classes.badge}>Error occured!</div>}
            {loading && <div className={classes.badge}>Loading badge!!!!</div>}

            {!loading && !error && (
                <div className={classes.badge}>
                    <img src={image} alt="Success" />
                </div>
            )}

        </div>
    );
}