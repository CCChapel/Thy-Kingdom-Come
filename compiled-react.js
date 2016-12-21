class Page extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'Hello, World!'
        );
    }
}

ReactDOM.render(React.createElement(Page, null), document.getElementById('root'));
