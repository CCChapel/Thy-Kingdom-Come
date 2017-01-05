/**
 * Displays the Contact Form
 */
class ContactForm extends React.Component {
    render() {
        return (
            <form method="post" action="https://www.formstack.com/forms/index.php">
                <input type="hidden" name="form" value="2569143" />
                <input type="hidden" name="viewkey" value="jXJg3zwAgW" />

                <div>
                    <input name="name"
                        type="text" 
                        placeholder="Name"
                        value=""  />
                </div>

                <div>
                    <input name="email"
                        type="text" 
                        placeholder="Email"
                        value="" />
                </div>

                <div>
                    <input name="subject"
                        type="text" 
                        placeholder="Subject"
                        value="" />
                </div>

                <div>
                    <textarea name="message"
                        placeholder="Message"
                        height="300px"
                        value="" />
                </div>

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}