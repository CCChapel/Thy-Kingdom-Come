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
        this.loadMinistryPartners = this.loadMinistryPartners.bind(this);
    }

    componentDidMount() {
        //Load Ministry Partners
        // var ministryPartners = new Array();
        var url = "http://sandbox.ccchapel.com/Thy-Kingdom-Come/data/outreach-spree.json";
        var request = new Request(url, {
                method: 'get',
                mode: 'no-cors'
            });
        var loadMinistryPartners = this.loadMinistryPartners;
        
        fetch(request)
            // .then(function status(response) {  
            //     if (response.status >= 200 && response.status < 300) {  
            //         return Promise.resolve(response)  
            //     } else {  
            //         return Promise.reject(new Error(response.statusText))  
            //     }  
            // })
            .then(function json(response) {  
                return response.json()  
            })
            .then(function(data) {
                loadMinistryPartners(data);
                console.log('Request succeeded with JSON response', data);
            }).catch(function(error) {
                console.log('Request failed', error);
            });

        console.log(this.state.ministryPartners);
    }

    handleClick(content) {
        this.props.showModal(content);
    }

    loadMinistryPartners(data) {
        this.setState({ minsitryPartners: data });
    }

    render() {
        //Create container for rows
        var rows = [];

        //Loop through each partner to create row
        // console.log(this.state.ministryPartners);
        // console.log(Array.isArray(this.state.ministryPartners));
        for (var partner in this.state.ministryPartners) {
            rows.push(
                <MinistryPartnerRow
                    partner={this.state.ministryPartners[partner]} 
                    handleClick={this.handleClick} />
            );

            console.log(partner);
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