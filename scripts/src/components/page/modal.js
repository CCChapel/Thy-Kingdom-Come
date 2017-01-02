/**
 * Defines the modal section of the page
 * @show: When true, the modal is shown
 */
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.hide = this.hide.bind(this);
    }

    hide() {
        this.props.hide();
    }

    render() {
        if (this.props.show === true) {
            return (
                <div className="modal content-wrapper">
                    <div className="modal-close" onClick={this.hide}><i className="fa fa-close" aria-hidden="true"></i></div>

                    {this.props.children}
                </div>
            );
        }
        else {
            return null;
        }
    }
}