/**
 * Displays the Contact Form
 */
class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            field_48610311: '',
            field_48610314: '',
            field_48610320: '',
            field_48610323: '',
            // field_48610311: 'John Smith',
            // field_48610314: 'test@test.com',
            // field_48610320: 'Subject',
            // field_48610323: 'Message'
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onNameChange(e) {
        this.setState({
            field_48610311: e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            field_48610314: e.target.value
        });
    }

    onSubjectChange(e) {
        this.setState({
            field_48610320: e.target.value
        });
    }

    onMessageChange(e) {
        this.setState({
            field_48610323: e.target.value
        });
    }

    handleSubmit(e) {
        //alert('Hello!');
        var url = 'https://www.formstack.com/api/v2/form/2569143/submission.json?oauth_token=68529bb9523b67cff3c735d2e5f9176a';

        var request = new Request(url, {
            method: 'post',
            body: JSON.toQueryString(this.state) //this.serializeData()
        });

        fetch(request).then(function(response) { console.log(response) });

        e.preventDefault();
    }

    render() {
        //var formId = '2569143';
        //var token = '68529bb9523b67cff3c735d2e5f9176a';
        //var url = 'package.json';

        // var nameId = 48610311;
        // var emailId = 48610314;
        // var subjectId = 48610320;
        // var messageId = 48610323;

        // var fields = {
        //     field_48610311: {
        //         first: 'John',
        //         last: 'Smith'
        //     },
        //     field_48610314: 'test@test.com',
        //     field_48610320: 'Subject',
        //     field_48610323: 'Message'
        // };

        //var query = "field_48610311%5Bfirst%5D=John&field_48610311%5Blast%5D=Smith";
        //this.serializeData();
        //console.log(serialize());

        return (
            <form>
                <input type="hidden" name="form" value="2569143" />
                <input type="hidden" name="viewkey" value="jXJg3zwAgW" />

                <div>
                    <input name="field_48610311"
                        type="text" 
                        placeholder="Name"
                        required
                        value={this.state.field_48610311}
                        onChange={this.onNameChange} />
                </div>

                <div>
                    <input name="field_48610314"
                        type="text" 
                        placeholder="Email"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                        value={this.state.field_48610314}
                        onChange={this.onEmailChange} />
                </div>

                <div>
                    <input name="field_48610320"
                        type="text" 
                        placeholder="Subject"
                        required
                        value={this.state.field_48610320}
                        onChange={this.onSubjectChange} />
                </div>

                <div>
                    <textarea name="field_48610323"
                        placeholder="Message"
                        height="300px"
                        required
                        value={this.state.field_48610323}
                        onChange={this.onMessageChange} />
                </div>

                <div className="center">
                    <CTA text="Submit" onClick={this.handleSubmit} />
                </div>
            </form>
        );
    }
}