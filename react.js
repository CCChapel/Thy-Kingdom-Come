/**
 * Defines a section on the page
 */
class Section extends React.Component {
    render() {
        return (
            <div class="section">I'm a section!</div>
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
                <Section />
                <Section />
                <Section />
                <Section />
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);