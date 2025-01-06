import stylex, { StyleXStyles } from "@stylexjs/stylex";

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
        fontSize: 30,
    }
})