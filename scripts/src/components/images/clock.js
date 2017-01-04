class Clock extends React.Component {
    render() {
        return (
            <svg className="clock" width="400" height="400">
                <circle className="face"
                    cx="200"
                    cy="200"
                    r="100" />

                {/* Second Hand */}
                <polyline className="second-hand"
                    points="200,200 200,110" />
                
                {/* Minute Hand */}
                <polyline className="minute-hand"
                    points="200,200 200,110" />

                {/* Hour Hand */}
                <polyline className="hour-hand"
                    points="200,200 125,200" />
            </svg>
        );
    }
}