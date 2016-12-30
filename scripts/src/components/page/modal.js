/**
 * Defines the modal section of the page
 * @show: When true, the modal is shown
 */
class Modal extends React.Component {
    render() {
        if (this.props.show === true) {
            return (
                <div className="modal content-wrapper">
                    {this.props.children}
                </div>
            );
        }
        else {
            return null;
        }
    }
}