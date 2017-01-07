/**
 * Displays the Contact Form
 * 
 * @className = Class Names to apply to root form element
 * @onComplete = Function to call when form completes submission
 */
class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: true,
            showConfirmation: false,
            data: {
                field_48610311: '',
                field_48610314: '',
                field_48610320: '',
                field_48610323: ''
            }
        };

        this.onShowForm = this.onShowForm.bind(this);
        this.onHideForm = this.onHideForm.bind(this);
        this.onShowConfirmation = this.onShowConfirmation.bind(this);
        this.onHideConfirmation = this.onHideConfirmation.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onShowForm(e) {
        this.setState({
            showForm: true
        });
    }
    onHideForm(e) {
        this.setState({
            showForm: false
        });
    }

    onShowConfirmation(e) {
        this.setState({
            showConfirmation: true
        });
    }
    onHideConfirmation(e) {
        this.setState({
            showConfirmation: false
        });
    }

    onNameChange(e) {
        this.setState({
            data: {
                field_48610311: e.target.value,
                field_48610314: this.state.data.field_48610314,
                field_48610320: this.state.data.field_48610320,
                field_48610323: this.state.data.field_48610323
            }
        });
    }

    onEmailChange(e) {
        this.setState({
            data: {
                field_48610311: this.state.data.field_48610311,
                field_48610314: e.target.value,
                field_48610320: this.state.data.field_48610320,
                field_48610323: this.state.data.field_48610323
            }
        });
    }

    onSubjectChange(e) {
        this.setState({
            data: {
                field_48610311: this.state.data.field_48610311,
                field_48610314: this.state.data.field_48610314,
                field_48610320: e.target.value,
                field_48610323: this.state.data.field_48610323
            }
        });
    }

    onMessageChange(e) {
        this.setState({
            data: {
                field_48610311: this.state.data.field_48610311,
                field_48610314: this.state.data.field_48610314,
                field_48610320: this.state.data.field_48610320,
                field_48610323: e.target.value
            }
        });
    }

    handleSubmit(e) {
        var url = 'https://www.formstack.com/api/v2/form/2569143/submission.json?oauth_token=68529bb9523b67cff3c735d2e5f9176a';

        var request = new Request(url, {
            method: 'post',
            mode: "no-cors",
            body: JSON.toQueryString(this.state.data) //this.serializeData()
        });

        //Store onHideForm, onShowConfirmation, onComplete locally because .then won't be able to access `this`
        var onHideForm = this.onHideForm;
        var onShowConfirmation = this.onShowConfirmation;
        var onComplete = this.props.onComplete;

        fetch(request)
            .then(function(response) {
                //Hide the form
                onHideForm();

                //Show Confirmation Message
                onShowConfirmation();

                //Delay 5 seconds, then call onComplete
                setTimeout(onComplete, 5000);
            })
            .catch(function(err) {
                //Log the error
                console.log(err);
            });
        
        //TO DO: Figure out why we're not getting event
        //e.preventDefault();
    }

    render() {
        //var formId = '2569143';
        //var token = '68529bb9523b67cff3c735d2e5f9176a';
        //var url = 'package.json';

        if (this.state.showForm === true) {
            return (
                <form className={this.props.className}>
                    <input type="hidden" name="form" value="2569143" />
                    <input type="hidden" name="viewkey" value="jXJg3zwAgW" />

                    <div>
                        <input name="field_48610311"
                            type="text" 
                            placeholder="Name"
                            required
                            value={this.state.data.field_48610311}
                            onChange={this.onNameChange} />
                    </div>

                    <div>
                        <input name="field_48610314"
                            type="text" 
                            placeholder="Email"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                            value={this.state.data.field_48610314}
                            onChange={this.onEmailChange} />
                    </div>

                    <div>
                        <input name="field_48610320"
                            type="text" 
                            placeholder="Subject"
                            required
                            value={this.state.data.field_48610320}
                            onChange={this.onSubjectChange} />
                    </div>

                    <div>
                        <textarea name="field_48610323"
                            placeholder="Message"
                            height="5em"
                            required
                            value={this.state.data.field_48610323}
                            onChange={this.onMessageChange} />
                    </div>

                    <div className="center">
                        <CTA text="Submit" onClick={this.handleSubmit} />
                    </div>
                </form>
            );
        }

        if (this.state.showConfirmation === true) {
            return (
                <div className={this.props.className}>
                    <h1 className="center">Thanks for submitting your message! Someone will be in touch.</h1>
                </div>
            );
        }

        return null;
    }
}