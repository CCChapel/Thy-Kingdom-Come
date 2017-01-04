class Clock extends React.Component {
    render() {
        return (
            <svg className="clock" width="400" height="400">
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
                    points="200,200 125,200" />
                
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