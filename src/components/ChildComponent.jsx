const ChildComponent = ({ children }) => {

    const childrenStyle = {
        color: "green",
        fontStyle: "italic"
    }

    return (
        <div>
            <h3>Child Component</h3>
            <div style={childrenStyle}>
                {children}
            </div>
        </div>
    )
}

export default ChildComponent;