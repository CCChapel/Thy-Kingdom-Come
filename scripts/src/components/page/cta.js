/**
 * Returns a Call-to-Action button
 */
class CTA extends React.Component {
    render() {
        return (
            <a className="cta" href="#">{this.props.text}</a>
        );
    }
}