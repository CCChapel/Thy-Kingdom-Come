class Clock extends React.Component {
    render() {
        //Allow classes to be passed in to Component
        var className = "clock ";
        if (this.props.className !== undefined) {
            className += this.props.className;
        }

        //Setup some values
        var cx = 200;
        var cy = 200;
        var r = 100;

        //Calculate Clock Positions
        var date = new Date();
        var hour = date.getHours() % 12;
        var minute = date.getMinutes();
        var second = date.getSeconds();

        //Calculate Hour Hand
        var hourA = Math.radians(hour * 30 - 90);
        var hourPoint = Math.pointOnCircle(cx, cy, r, hourA);
        var hourPoints = cx + "," + cy + " " + hourPoint.x + "," + (hourPoint.y - 20);           //Subtract 20 to reduce hour size

        //Calculate Minutes Hand
        var minuteA = Math.radians(minute * 6 - 90);
        var minutePoint = Math.pointOnCircle(cx, cy, r, minuteA);
        var minutePoints = cx + "," + cy + " " + minutePoint.x + "," + (minutePoint.y - 10);     //Subtract 10 to reduce hour size

        //Calculate Seconds Hand
        var secondA = Math.radians(second * 6 - 90);
        var secondPoint = Math.pointOnCircle(cx, cy, r, secondA);
        var secondPoints = cx + "," + cy + " " + secondPoint.x + "," + secondPoint.y;

        return (
            <svg className={className} width="400" height="400">
                <circle className="clock__face"
                    cx={cx}
                    cy={cy}
                    r={r} />

                {/*
                <circle className="clock__center"
                    cx="200"
                    cy="200"
                    r="4" />*/}

                {/* Hour Hand */}
                <polyline className="clock__hour-hand"
                    points={hourPoints} />
                
                {/* Minute Hand */}
                <polyline className="clock__minute-hand"
                    points={minutePoints} />

                {/* Second Hand */}
                <polyline className="clock__second-hand"
                    points={secondPoints} />
            </svg>
        );
    }
}