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
            backgroundImage: this.props.backgroundImage
        };

        var className = "section flex ";
        if (this.props.className !== undefined) {
            className += this.props.className;
        }

        return React.createElement(
            "div",
            { className: className, style: divStyle },
            this.props.children
        );
    }
}

/**
 * Defines the base page
 */
class Page extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                Section,
                { className: "clouds" },
                React.createElement("img", { src: "images/logo.svg" })
            ),
            React.createElement(Section, { className: "light-blue" }),
            React.createElement(Section, { className: "medium-blue" }),
            React.createElement(Section, { className: "dark-blue" })
        );
    }
}

ReactDOM.render(React.createElement(Page, null), document.getElementById('root'));
