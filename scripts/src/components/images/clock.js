class Clock extends React.Component {
    render() {
        var styles = {
            fill: 'transparent',
            stroke: 'purple',
            strokeWidth: 1
        };

        return (
            <svg width="400" height="400">
                <circle 
                    cx="200"
                    cy="200"
                    r="100"
                    stroke="black"
                    strokeWidth="4"
                    fill="transparent" />
                
                {/* Minute Hand */}
                <polyline className="fx-rotate"
                    points="200,200 200,110"
                    style={styles} />

                {/* Hour Hand */}
                <polyline
                    points="200,200 125,200"
                    style={styles} />
            </svg>
        );
    }
}