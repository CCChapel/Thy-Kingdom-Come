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

                <Section className="bg-clouds bg-cover justify-content-center">
                    <Logo />
                </Section>

                <Section className="bg-light-blue">
                    <div className="content-wrapper">
                        <h1 className="center">Introduction</h1>
                    </div>
                </Section>

                <Section className="bg-medium-blue">
                    <div className="content-wrapper">
                        <h1 className="center">Local Spree</h1>

                        <p className="center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt 
                            lacus lorem, eget maximus augue mattis sit amet. Aliquam finibus est in 
                            varius sollicitudin.
                        </p>

                        <MinistryPartnersTable showModal={this.showModal} partners={MINISTRY_PARTNERS} />
                    </div>
                </Section>

                <Section className="bg-dark-blue">
                    <div className="content-wrapper">
                        <h1 className="center">Assignments</h1>

                        <h1 className="center"><i className="[ fa fa-5x fa-clock-o ]"></i></h1>

                        <p className="center">
                            Keep checking back! We&rsquo;ll have more assignments for you soon.
                        </p>
                    </div>
                </Section>

                <Section className="bg-charcoal align-content-top auto-min-height text-white">
                    <div className="content-wrapper">
                        &copy; Copyright 2017
                    </div>
                </Section>
            </div>
        );
    }
}