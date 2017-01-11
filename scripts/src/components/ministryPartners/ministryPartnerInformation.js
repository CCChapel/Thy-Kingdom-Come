/**
 * Displays the ministry partner information
 * @information = Partner Information to display
 */
class MinsitryPartnerInformation extends React.Component {
    render() {
        var options = [];
        var htmlToReactParcer = new HtmlToReactParcer();

        this.props.information.options.forEach((option, index) => {
            var details = option.details.split("\\n").map(function(line, n) {
                retun (n === 0) ? [line] : [<br />], line];
            });

            options.push(
                <div className="add-bottom-margin">
                    <h3 className="no-bottom-margin">{option.name}</h3>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    <div>{ htmlToReactParcer(option.details) }</div>
=======
                    <div>{details}</div>
>>>>>>> parent of be16400... Test BreakLine function
=======
                    <div>{details}</div>
>>>>>>> parent of be16400... Test BreakLine function
=======
                    <div>{details}</div>
>>>>>>> parent of be16400... Test BreakLine function
                </div>
            );
        });

        return (
            <div>
                <h1>
                    {this.props.information.name}
                    
                    <span className="sans-serif text-medium-blue text-smaller">
                        <a href={this.props.information.website}>Visit their site</a>
                        <i className="fa fa-angle-right"></i>
                    </span>
                </h1>

                <div className="add-bottom-margin">
                    {this.props.information.description}
                </div>

                <h2 className="no-bottom-margin">Options</h2>
                {options}
            </div>
        );
    }
}