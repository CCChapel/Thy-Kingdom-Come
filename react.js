// /**
//  * Defines a background
//  */
// class Background extends React.Component {
//     render() {
//         var background = {};
//         if (this.props.imageUrl !== undefined) {
//             background.backgroundImage = this.props.imageUrl;
//         }
//         if (this.props.color !== undefined) {
//             background.backgroundColor = this.props.color;
//         }

//         return (
//             {background}
//         );
//     }
// }

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

        var className = "section ";
        if (this.props.className !== undefined) {
            className += this.props.className;
        }

        return (
            <div className={className} style={divStyle}>
                I'm a section!
            </div>
        );
    }
}

/**
 * Defines the base page
 */
class Page extends React.Component {
    render() {
        return (
            <div>
                <Section backgroundColor="blue" />
                <Section backgroundColor="red" />
                <Section backgroundColor="yellow" />
                <Section backgroundColor="green" />
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);