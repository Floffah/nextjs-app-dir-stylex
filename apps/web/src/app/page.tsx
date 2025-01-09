import stylex from "@stylexjs/stylex";
import {tokens} from "@/app/tokens.stylex";

export default function Home() {
    return (
        <div {...stylex.props(styles.page)}>
            <div {...stylex.props(styles.text)}>Hello World</div>
        </div>
    );
}

const styles = stylex.create({
    page: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
    },
    text: {
        color: "white",
        fontSize: tokens.fontSize
    }
})