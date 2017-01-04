class Clock extends React.Component {
    render() {
        //Allow classes to be passed in to Component
        var className = "clock ";
        if (this.props.className !== undefined) {
            className += this.props.className;
        }

        //Calculate Clock Positions
        var date = new Date();
        var hour = date.getHours() % 12;
        var minute = date.getMinutes();
        var second = date.getSeconds();

        //Calculate Hour Hand
        var hourAngle = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
        console.log(hourAngle);
        var hourPoints = "200,200 ";

        return (
            <svg className={className} width="400" height="400">
                <circle className="clock__face"
                    cx="200"
                    cy="200"
                    r="100" />

                <circle className="clock__center"
                    cx="200"
                    cy="200"
                    r="4" />

                {/* Hour Hand */}
                <polyline className="clock__hour-hand"
                    points="200,200 200,300" />
                
                {/* Minute Hand */}
                <polyline className="clock__minute-hand"
                    points="200,200 200,110" />

                {/* Second Hand */}
                <polyline className="clock__second-hand"
                    points="200,200 200,110" />
            </svg>
        );
    }
}