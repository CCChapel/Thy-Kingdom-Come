// /**
//  * Defines a background
//  */
// class Background extends React.Component {
//     render() {
//         var background = '';
//         if (this.props.imageUrl !== undefined) {
//             background += "background-image: " + this.props.imageUrl;
//         }
//         if (this.props.color !== undefined) {
//             background += "background-color: " + this.props.color;
//         }

//         return (
//             <div>Hi!</div>
//         );
//     }
// }

/**
 * Defines a section on the page
 * @backgroundColor = background color
 */
class Section extends React.Component {
    render() {
        // var background = <Background color="black" />;
        const divStyle = {
            backgroundColor: this.props.backgroundColor
        };

        return React.createElement(
            "div",
            { className: "section", style: divStyle },
            "I'm a section!"
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
            React.createElement(Section, { backgroundColor: "blue" }),
            React.createElement(Section, { backgroundColor: "red" }),
            React.createElement(Section, { backgroundColor: "yellow" }),
            React.createElement(Section, { backgroundColor: "green" })
        );
    }
}

ReactDOM.render(React.createElement(Page, null), document.getElementById('root'));
