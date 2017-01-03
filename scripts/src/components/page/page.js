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
                <Modal show={this.state.showModal} hide={this.hideModal}>
                    {this.state.modalContent}
                </Modal>

                <Section className="bg-clouds">
                    <Logo />
                </Section>

                <Section className="bg-light-blue">
                    <div className="content-wrapper">
                        <h1>Introduction</h1>
                    </div>
                </Section>

                <Section className="bg-medium-blue">
                    <div className="content-wrapper">
                        <h1>Local Spree</h1>

                        <MinistryPartnersTable showModal={this.showModal} partners={MINISTRY_PARTNERS} />
                    </div>
                </Section>

                <Section className="bg-dark-blue">
                    <div className="content-wrapper">
                        <h1>Initiatives</h1>
                    </div>
                </Section>

                <Section className="bg-charcoal align-content-top auto-min-height text-white">
                    <div className="content-wrapper serif">
                        &copy; Copyright 2017
                    </div>
                </Section>
            </div>
        );
    }
}