/**
 * Defines a section on the page
 * @backgroundColor = background color
 * @backgroundImage = image to display in the background
 */
class Section extends React.Component {
    render() {
        // var background = <Background color="black" />;
        const divStyle = {
            backgroundColor: this.props.backgroundColor,
            backgroundImage: this.props.backgroundImage,
        };

        var className = "section flex fill-screen-height ";
        if (this.props.className !== undefined) {
            className += this.props.className;
        }

        return (
            <div className={className} style={divStyle}>
                {this.props.children}
            </div>
        );
    }
}