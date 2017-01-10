/**
 * Defines the base page
 */
class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            modalContent: 'Initial Modal Content'
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(modalContent) {
        this.setState({
            showModal: true,
            modalContent: modalContent
        });
    }

    hideModal(e) {
        this.setState({showModal: false});
    }

    // status(response) {  
    //     if (response.status >= 200 && response.status < 300) {  
    //         return Promise.resolve(response)  
    //     } else {  
    //         return Promise.reject(new Error(response.statusText))  
    //     }  
    // }

    // json(response) {  
    //     return response.json()  
    // }

    render() {
        //Get Ministry Partner Data
        var ministryPartners = {};
        var url = "http://sandbox.ccchapel.com/Thy-Kingdom-Come/data/outreach-spree.json";
        var request = new Request(url, {
                method: 'get',
                mode: 'no-cors'
            });
        
        fetch(request)
            .then(function status(response) {  
                if (response.status >= 200 && response.status < 300) {  
                    return Promise.resolve(response)  
                } else {  
                    return Promise.reject(new Error(response.statusText))  
                }  
            })
            .then(function json(response) {  
                return response.json()  
            })
            .then(function(data) {
                console.log('Reqest succeeded with JSON response', data);
            }).catch(function(error) {
                console.log('Request failed', error);
            });

        // fetch(request).then(function(response) { 
        //     console.log(response);
        //     return response.json();
        // }).then(function(j) {
        //     console.log(j);    
        // });


        // fetch(request).then(function(response) {
        //         response.json().then(function(data) {  
        //         console.log(data);  
        //     });
        //         // ministryPartners = response.json();
        //         // console.log(ministryPartners);
        //     })
        //     .then((j) => {
        //         // Yay `j` is a JavaScript object
        //         console.log(j);
        //     })
        //     .catch((err) => {
        //         //Log the error
        //         console.log(err);
        //         //showError("Hmm\u2026 Something didn\u2019t go quite as planned. Please try again.");
        //     });

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

                        {/*<MinistryPartnersTable showModal={this.showModal} partners={ministryPartners} />*/}
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