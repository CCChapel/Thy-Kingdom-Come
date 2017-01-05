class Clock extends React.Component {

    formatPoints(x1, y1, x2, y2) {
        return (x1 + "," + y1 + " " + x2 + "," + y2);
    }
    
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
        var hourPoints = this.formatPoints(cx, cy, hourPoint.x, hourPoint.y);           //Subtract 40 to reduce hour size

        //Calculate Minutes Hand
        var minuteA = Math.radians(minute * 6 - 90);
        var minutePoint = Math.pointOnCircle(cx, cy, r, minuteA);
        var minutePoints = this.formatPoints(cx, cy, minutePoint.x, minutePoint.y);     //Subtract 20 to reduce hour size

        //Calculate Seconds Hand
        var secondA = Math.radians(second * 6 - 90);
        var secondPoint = Math.pointOnCircle(cx, cy, r, secondA);
        var secondPoints = this.formatPoints(cx, cy, secondPoint.x, secondPoint.y);    //Subtract 20 to reduce hour size

        return (
            <svg className={className} width="400" height="400">
                <circle className="clock__face"
                    cx={cx}
                    cy={cy}
                    r={r} />

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