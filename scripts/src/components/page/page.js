/**
 * Defines the base page
 * @showModal: When true, shows the modal
 */
class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal : false,
            modalContent : 'Initial Modal Content'
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(modalContent) {
        this.setState({
            showModal : true,
            modalContent : modalContent
        });
    }

    hideModal(e) {
        this.setState({showModal : false});
    }

    render() {
        return (
            <div>
                <Modal show={this.state.showModal}>
                    <button onClick={this.hideModal}>Hide Modal</button>
                    {this.state.modalContent}
                </Modal>

                <Section className="clouds">
                    <Logo />
                </Section>

                <Section className="light-blue">
                    <div className="content-wrapper">
                        Introduction
                    </div>
                </Section>

                <Section className="medium-blue">
                    <div className="content-wrapper">
                        Local Spree

                        <MinistryPartnersTable showModal={this.showModal} partners={MINISTRY_PARTNERS} />
                    </div>
                </Section>

                <Section className="dark-blue">
                    <div className="content-wrapper">
                        Initiatives
                    </div>
                </Section>

                <Section className="charcoal align-content-top auto-min-height">
                    <div className="content-wrapper">
                        &copy; Copyright 2017
                    </div>
                </Section>
            </div>
        );
    }
}