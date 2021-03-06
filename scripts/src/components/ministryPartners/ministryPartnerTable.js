/**
 * Defines a Ministry Table of Ministry Partners
 */
class MinistryPartnersTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ministryPartners: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        //Load Ministry Partners
        var _this = this;       //Make this available in fetch
        var url = "http://sandbox.ccchapel.com/Thy-Kingdom-Come/data/outreach-spree.json";
        var request = new Request(url, {
                method: 'get',
                mode: 'no-cors'
            });
        var loadMinistryPartners = this.loadMinistryPartners;
        
        fetch(request)
            .then(function json(response) {  
                return response.json()  
            })
            .then(function(data) {
                _this.setState({ ministryPartners: data });
                //console.log('Request succeeded with JSON response', data);
            }).catch(function(error) {
                //console.log('Request failed', error);
            });
    }

    handleClick(content) {
        this.props.showModal(content);
    }

    render() {
        //Create container for rows
        var rows = [];

        //Loop through each partner to create row
        // this.state.ministryPartners.map(function(partner) {
        //     rows.push(
        //         <MinistryPartnerRow
        //             partner={partner}
        //             handleClick={this.handleClick} />
        //     )
        // });
        for (var partner in this.state.ministryPartners) {
            rows.push(
                <MinistryPartnerRow
                    partner={this.state.ministryPartners[partner]} 
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