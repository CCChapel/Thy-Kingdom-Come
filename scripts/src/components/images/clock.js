class Clock extends React.Component {
    pointToString(point) {
        return (point.x + "," + point.y);
    }

    formatPoints(p1, p2) {
        return (this.pointToString(p1) + " " + this.pointToString(p2));
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
        var origin = {
            x: cx,
            y: cy
        };

        //Calculate Clock Positions
        var date = new Date();
        var hour = date.getHours() % 12;
        var minute = date.getMinutes();
        var second = date.getSeconds();

        //Calculate Hour Hand
        var hourA = Math.radians(hour * 30 - 90);
        var hourPoint = Math.pointOnCircle(cx, cy, r - 50, hourA);
        var hourPoints = this.formatPoints(origin, hourPoint); 

        //Calculate Minutes Hand
        var minuteA = Math.radians(minute * 6 - 90);
        var minutePoint = Math.pointOnCircle(cx, cy, r - 20, minuteA);
        var minutePoints = this.formatPoints(origin, minutePoint);

        //Calculate Seconds Hand
        var secondA = Math.radians(second * 6 - 90);
        var secondPoint = Math.pointOnCircle(cx, cy, r - 10, secondA);
        var secondPoints = this.formatPoints(origin, secondPoint);

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