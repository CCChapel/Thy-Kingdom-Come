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
            backgroundColor: this.props.backgroundColor,
        };

        return (
            <div className="section" style={divStyle}>
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