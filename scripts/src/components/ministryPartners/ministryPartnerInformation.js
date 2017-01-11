/**
 * Displays the ministry partner information
 * @information = Partner Information to display
 */
class MinsitryPartnerInformation extends React.Component {
    render() {
        var options = [];

        this.props.information.options.forEach((option, index) => {
            options.push(
                <div className="add-bottom-margin">
                    <h3>{option.name}</h3>
                    <div>{option.details}</div>
                </div>
            );
        });

        return (
            <div>
                <h1>
                    {this.props.information.name} <span className="text-medium-blue text-smaller"><a href={this.props.information.website}>Visit their site</a></span>
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