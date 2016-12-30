/**
 * Displays the ministry partner information
 * @information = Partner Information to display
 */
class MinsitryPartnerInformation extends React.Component {
    render() {
        var options = [];

        this.props.information.options.forEach((option, index) => {
            options.push(
                <div>
                    <div>{option.name}</div>
                    <div>{option.details}</div>
                </div>
            );
        });

        return (
            <div>
                <div>{this.props.information.name}</div>
                <div>{this.props.information.address}</div>
                <div>{this.props.information.city}</div>
                <div>{this.props.information.state}</div>
                <div>{this.props.information.zipCode}</div>
                <div>{this.props.information.website}</div>
                <br />
                <div>Options</div>
                {options}
            </div>
        );
    }
}