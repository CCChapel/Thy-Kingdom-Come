/**
 * Defines a Ministry Table of Ministry Partners
 * @partners = Array of ministry partners
 */
class MinistryPartnersTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(content) {
        this.props.showModal(content);
    }

    render() {
        //Create container for rows
        var rows = [];

        //Loop through each partner to create row
        for (var partner in this.props.partners) {
            rows.push(
                <MinistryPartnerRow
                    partner={partner} 
                    handleClick={this.handleClick} />
            );
        }
        // this.props.partners.forEach((partner, index) => {
        //     rows.push(
        //         <MinistryPartnerRow
        //             partner={partner} 
        //             handleClick={this.handleClick} />
        //     );
        // });

        return (
            <div className="flex wrap align-items-stretch">
                {rows}
            </div>
        )
    }
}