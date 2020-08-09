import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles.jsx";

const style = {
    display: "inline",
    position: "fixed",
    overflow: "hidden",
    top: "0px",
    left: "0px",
    right: "0px",
    textAlign: "center",
    color: styles.colors.fg,
    fontFamily: styles.fontFamily,
    fontSize: styles.fontSize,
    lineHeight: styles.lineHeight,
    fontWeight: styles.fontWeight,
    //background: "#0003",
};

export const refreshFrequency = false;

export const command = "./clarity/scripts/title.sh 1";

export const render = ({ output }) => {
    return (
        <div style={style}>
            {output}
        </div>
    );
};

export default null;
