/**
 * Defines a row representing a ministry partner
 * @partner = The partner to display
 * @handleClick = Method to handle the click event
 */
class MinistryPartnerRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(data) {
        this.props.handleClick(data);
    }

    render() {
        return (
            <div onClick={() => this.handleClick(<MinsitryPartnerInformation information={this.props.partner} />)}>
                {this.props.partner.name}
            </div>
        );
    }
}