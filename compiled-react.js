/**
 * Defines a section on the page
 */
class Section extends React.Component {
    render() {
        return React.createElement(
            "div",
            { "class": "section" },
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
            React.createElement(Section, null),
            React.createElement(Section, null),
            React.createElement(Section, null),
            React.createElement(Section, null)
        );
    }
}

ReactDOM.render(React.createElement(Page, null), document.getElementById('root'));
