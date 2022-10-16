import styles from "./styles.jsx";
import run from "uebersicht";

const containerStyle = {
    display: "grid",
    gridAutoFlow: "column",
    gridGap: "8px",
    fontSize: "8px",
    fontFamily: "'Font Awesome 5 Free Solid'"
};

const desktopStyle = {
    width: "24px",
    height: "5px",
    textAlign: "center"
};

const symbols = ["terminal", "globe", "code", "comment", "list", "desktop", "gamepad", "couch", "brush"];

const renderSpace = (display_index, index, focused, visible, windows) => {
    let contentStyle = JSON.parse(JSON.stringify(desktopStyle));
    let hasWindows = windows.length > 0;
    if (focused == 1) {
        contentStyle.color = "#ffffff88";
        contentStyle.borderBottom = '3px solid #ffffffbb';
        contentStyle.backgroundImage = "linear-gradient(#fff0, #ffffff66)";
    } else {
        contentStyle.color = "#ffffff22";
        contentStyle.borderBottom = '3px solid #ffffff22';
        contentStyle.backgroundImage = "linear-gradient(#fff0, #ffffff05)";
    }
    return (
        <div style={contentStyle}></div>
    );
};

const render = ({ output }) => {
    if (typeof output === "undefined") return null;

    const spaces = [];

    output.forEach(function(space) {
        spaces.push(renderSpace(space.display, space.index, space["is-visible"], space["is-visible"], space.windows));
    });

    return (
        <div style={containerStyle}>
            {spaces}
        </div>
    );
};

export default render;
