/**
 * Displays the Contact Form
 */
class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onSubjectChange(e) {
        this.setState({
            subject: e.target.value
        });
    }

    onMessageChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleSubmit(e) {
        alert('Hello!');
        e.preventDefault();
    }

    render() {
        return (
            // <form method="post" action="https://www.formstack.com/forms/index.php">
            <form>
                <input type="hidden" name="form" value="2569143" />
                <input type="hidden" name="viewkey" value="jXJg3zwAgW" />

                <div>
                    <input name="name"
                        type="text" 
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.onNameChange} />
                </div>

                <div>
                    <input name="email"
                        type="text" 
                        placeholder="Email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                        value={this.state.email}
                        onChange={this.onEmailChange} />
                </div>

                <div>
                    <input name="subject"
                        type="text" 
                        placeholder="Subject"
                        value={this.state.subject}
                        onChange={this.onSubjectChange} />
                </div>

                <div>
                    <textarea name="message"
                        placeholder="Message"
                        height="300px"
                        value={this.state.message}
                        onChange={this.onMessageChange} />
                </div>

                <div>
                    <CTA text="Submit" onClick={this.handleSubmit} />
                </div>
            </form>
        );
    }
}