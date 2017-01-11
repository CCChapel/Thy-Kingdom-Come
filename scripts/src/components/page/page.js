/**
 * Defines the base page
 */
class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            modalContent: 'Initial Modal Content',
            ministryPartners: []
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.loadMinistryPartners = this.loadMinistryPartners.bind(this);
    }

    showModal(modalContent) {
        this.setState({
            showModal: true,
            modalContent: modalContent
        });
    }

    hideModal(e) {
        this.setState({ showModal: false });
    }

    loadMinsitryPartners(data) {
        this.setState({ minsitryPartners: data });
    }

    render() {
        //Get Ministry Partner Data
        // var ministryPartners = new Array();
        var url = "http://sandbox.ccchapel.com/Thy-Kingdom-Come/data/outreach-spree.json";
        var request = new Request(url, {
                method: 'get',
                mode: 'no-cors'
            });
        
        fetch(request)
            // .then(function status(response) {  
            //     if (response.status >= 200 && response.status < 300) {  
            //         return Promise.resolve(response)  
            //     } else {  
            //         return Promise.reject(new Error(response.statusText))  
            //     }  
            // })
            .then(function json(response) {  
                return response.json()  
            })
            .then(function(data) {
                loadMinistryPartners(data);
                console.log('Request succeeded with JSON response', ministryPartners);
            }).catch(function(error) {
                console.log('Request failed', error);
            });

        console.log(this.state.ministryPartners);

        return (
            <div>
                <Modal show={this.state.showModal} hide={this.hideModal}>
                    {this.state.modalContent}
                </Modal>

                <Section className="[ bg-clouds bg-cover ] [ justify-content-center ] [ overflow-x-hidden ]">
                    <Logo />
                </Section>

                <Section className="bg-light-blue">
                    <div className="content-wrapper lock-width center-by-margin">
                        <h1 className="center">Thy Will Be Done</h1>

                        <p>
                            When his original students, the disciples, asked him how to pray, he said &ldquo;Pray 
                            like this: &lsquo;Our father, who art in Heaven&hellip; thy kingdom come, thy will be done, 
                            on earth, as it is in Heaven.&rsquo;&nbsp;&rdquo; If you are a student and follower of Jesus, 
                            God is your father who has a will and a kingdom. This year, our church-wide 
                            vision is to pray vigilantly and work diligently to bring this prayer to fruition; 
                            to bring our father&rsquo;s will and kingdom here to earth.
                        </p>

                        <p className="center-by-margin nine-tenths">
                            <VimeoVideo vimeoId="198552260"
                                width="640px"
                                height="360px" />
                        </p>

                        <p className="center">
                            <CTA text="Questions" 
                                onClick={() => 
                                    this.showModal(
                                        <ContactForm className="content-wrapper lock-width center-by-margin"
                                            onComplete={this.hideModal} />
                                    )} />
                        </p>
                    </div>
                </Section>

                <Section className="bg-medium-blue">
                    <div className="content-wrapper">
                        <div className="lock-width center-by-margin">
                            <h1 className="center">Local Outreach Spree</h1>

                            <ol>
                                <li>
                                    Complete eight kingdom assignments.
                                </li>

                                <li>
                                    Have your assignments initialed by each ministry partner after the assignment 
                                    is completed.
                                </li>

                                <li>
                                    Return this form to the bookstore (Hudson) or the Welcome Center 
                                    (Aurora/Highland Square) or to the church office during business hours to 
                                    receive your free Caf&eacute; 6:8 drink vouchers and cup or mug.
                                </li>
                            </ol>
                        </div>

                        <MinistryPartnersTable showModal={this.showModal} partners={this.state.ministryPartners} />
                    </div>
                </Section>

                <Section className="bg-dark-blue text-white">
                    <div className="content-wrapper">
                        <h1 className="center">Assignments</h1>

                        <p>
                            <Clock className="center-by-margin" height="250" width="250" />
                        </p>

                        <p className="center">
                            Keep checking back! We&rsquo;ll have more assignments for you soon.
                        </p>
                    </div>
                </Section>

                <Section className="bg-charcoal align-content-top auto-min-height text-white">
                    <div className="content-wrapper">
                        &copy; Copyright 2017 | <a href="https://ccchapel.com" target="_blank">Christ Community Chapel</a>
                    </div>
                </Section>
            </div>
        );
    }
}