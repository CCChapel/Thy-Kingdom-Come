
class /**
       * Creates a running, analog clock
       * 
       * @className = class names to add to root SVG element
       * @height = height of the SVG element (default = 400)
       * @width = width of the SVG element (default = 400)
       **/Clock extends React.Component {
    pointToString(point) {
        return point.x + "," + point.y;
    }

    formatPoints(p1, p2) {
        return this.pointToString(p1) + " " + this.pointToString(p2);
    }

    render() {
        //Allow classes to be passed in to Component
        var className = "clock ";
        if (this.props.className !== undefined) {
            className += this.props.className;
        }

        //Setup Height & Width
        var height = 400;
        if (this.props.height !== undefined) {
            height = this.props.height;
        }

        var width = 400;
        if (this.props.width !== undefined) {
            width = this.props.width;
        }

        //Setup image values
        var cx = width / 2;
        var cy = height / 2;
        var r = Math.min(cx, cy) * .8;
        var origin = {
            x: cx,
            y: cy
        };

        //Calculate Clock Positions
        var date = new Date();
        var second = date.getSeconds();
        var minute = date.getMinutes() + second / 60;
        var hour = date.getHours() % 12 + minute / 60;

        //Calculate Hour Hand
        var hourA = Math.radians(hour * 30 - 90);
        var hourPoint = Math.pointOnCircle(cx, cy, r * .6, hourA);
        var hourPoints = this.formatPoints(origin, hourPoint);

        //Calculate Minutes Hand
        var minuteA = Math.radians(minute * 6 - 90);
        var minutePoint = Math.pointOnCircle(cx, cy, r * .8, minuteA);
        var minutePoints = this.formatPoints(origin, minutePoint);

        //Calculate Seconds Hand
        var secondA = Math.radians(second * 6 - 90);
        var secondPoint = Math.pointOnCircle(cx, cy, r * .85, secondA);
        var secondPoints = this.formatPoints(origin, secondPoint);

        return React.createElement(
            "svg",
            { className: className, width: width, height: height },
            React.createElement("circle", { className: "clock__face",
                cx: cx,
                cy: cy,
                r: r }),
            React.createElement("polyline", { className: "clock__second-hand",
                points: secondPoints }),
            React.createElement("polyline", { className: "clock__hour-hand",
                points: hourPoints }),
            React.createElement("polyline", { className: "clock__minute-hand",
                points: minutePoints })
        );
    }
}

class /**
       * Defines the logo for Thy Kingdom Come
       */Logo extends React.Component {
    render() {
        var styles = {
            minWidth: '600px',
            maxWidth: '1080px'
        };

        return React.createElement(
            'svg',
            { id: 'Layer_1', 'data-name': 'Layer 1', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1920 1080', style: styles },
            React.createElement(
                'title',
                null,
                'Thy Kingdom Come'
            ),
            React.createElement(
                'g',
                { className: 'fx-down-up' },
                React.createElement('path', { d: 'M905.81,383l-23.62,12.81L879.44,409h1l1-1.71c5.58-10.72,14.83-22.29,28.33-23.29H916v86.7c0,.88-1.84,1.91-7,2.35l-7.31.83-.41,1.12h43.45l-.44-1.12-5.76-.56c-7.63-.59-8.55-1.15-8.55-2.18V384h6.54c13.06,1,21.72,8.9,28.18,23.29l.88,1.71h.88l-4-26Z' }),
                React.createElement('path', { d: 'M1029.45,414.77c-2.79-2.79-6.53-4.26-11.23-4.26-10.57,0-19.07,7.78-24.8,12.62l-.43-.29V375.72l-21.26,5.58-.06.59,3.41.88c4.84,1.32,5.91,2.5,5.91,6.46v82.06c0,1.76-1.61,1.91-6,2.2l-2.49.39-.44,1.12h31.27l-.44-1.12-2.23-.27c-6.61-.44-7.66-.86-7.66-2V425a23.8,23.8,0,0,1,15.82-6c8.66,0,13.18,3.82,13.18,12.33v37.93l12-6.88V429.3C1034,423.14,1032.83,418.15,1029.45,414.77Z' }),
                React.createElement('path', { d: 'M1065.13,421.23c-2.35-5.43-1.76-7.34,3.82-7.63l2.5.07.44-.66h-32.15l.44.66,2.79,0c4.55.29,5.14,1.41,8.51,9l10.66,24.34,11.3-6.25Z' }),
                React.createElement('path', { d: 'M1105.64,413.6l2.2.07.44-.66H1083l.44.66,2.05,0c9.83.88,10.86,2.59,6,16.24l-.43,1.16,2.25-1.25C1098.36,415.95,1099.16,414,1105.64,413.6Z' }),
                React.createElement('path', { d: 'M783.51,541.89c26.13-26.72,26.72-29.06,38.46-30.09l1.76,0,.44-.77H787.33l.15.77,5.87.38c13.21,1,13.05,4.08-10.73,28.3l-22.62,23V514.59c0-.88,1.92-1.91,7.06-2.35l7.35-.47.45-.77H733.46l.44.77,4.22.38c7.63.59,7.89,1,7.89,2V598.7c0,.88-1.28,1.91-6.42,2.35l-5.85.83-.42,1.12h41.39l-.44-1.12-5.74-.56c-7.63-.59-8.53-1.15-8.53-2.18V565.67l13.08-13.21,19.09,32.29a84.46,84.46,0,0,1,4.55,8.67l12.57-6.93-26.51-43.72Z' }),
                React.createElement('path', { d: 'M829.22,544.53l-.25.59,3.19.73c5,1,5.84,2.5,5.84,11.45v13.21l13-6.8V538.81Z' }),
                React.createElement('path', { d: 'M843.11,526.33a8.26,8.26,0,0,0,8.37-8.07,8.4,8.4,0,0,0-8.37-8.37,8.3,8.3,0,0,0-8.37,8.37A8.16,8.16,0,0,0,843.11,526.33Z' }),
                React.createElement('path', { d: 'M1251.41,601.49c-7.34-.59-7.41-1.17-7.41-2.06V558c0-6.17-1.25-12-4.48-15.27-2.94-2.94-6.43-4.26-11.56-4.26-10.27,0-17.16,7.19-22.59,12.92l-.14-.15a15.29,15.29,0,0,0-3.67-8.37,16.31,16.31,0,0,0-11.59-4.4c-10.57,0-17.32,7.63-22.16,12.48l-.44-.15.44-12-3.51.93-12.6,6.86c2.81,1.19,3.31,3.59,3.31,10.86v41.83c0,1.76-1.45,1.91-6,2.2l-2.56.39-.36,1.12h31.27l-.29-1.12-2-.27c-6.31-.44-7-.86-7-2V552.75a18.35,18.35,0,0,1,13.67-5.72c8.66,0,11.33,3.67,11.33,12.48v39.78c0,1.17-.63,1.91-5.62,2.2l-2.52.39-.32,1.12h31.12l-.44-1.12-2-.27c-7.34-.59-7.25-1.3-7.25-2.18V554.66l.35-1.32c1-3.23,7.76-6.31,13.63-6.31,9,0,12,3.67,12,12.48v39.78c0,1.17-1.05,1.91-6.19,2.2l-2.73.39-.53,1.12h31.27l-.47-1.12Z' }),
                React.createElement('path', { d: 'M922.3,699.69c0-18.5,14.24-33.32,33.76-33.32s33.76,14.24,33.76,32.73c0,18.79-14.24,33.32-33.76,33.32S922.3,718.18,922.3,699.69Zm52.7.73c0-11.45-2.5-22.46-7.93-27.89-2.79-2.64-6.17-5-11.3-5-12.92,0-18.64,15.85-18.64,30.24,0,12,2.06,22.75,7.63,28.33,3.23,3.23,6.75,        5.14,11.45,5.14C968.25,731.25,975,716,975,700.42Z' }),
                React.createElement('path', { d: 'M995,729.63l2.64-.15c4.55-.29,6.17-.44,6.17-2.2V685.45c0-9.1-1-10.57-6-11.6l-3.38-.73.15-.59,21.72-5.72-.44,12,.44.15c4.84-4.84,11.6-12.48,22.17-12.48a16.32,16.32,0,0,1,11.6,4.4,15.29,15.29,0,0,1,3.67,8.37l.15.15c5.43-5.72,12.33-12.92,22.61-12.92,5.14,0,8.66,1.32,11.6,4.26,3.23,3.23,4.55,9.1,4.55,15.27v41.39c0,.88,0,1.47,7.34,2.06l1.91.15.44.88H1071l.44-.88,2.64-.15c5.14-.29,6-1,6-2.2V687.5c0-8.81-2.94-12.48-11.89-12.48-5.87,0-12.48,3.08-13.5,6.31l-.44,1.32v44.77c0,.88,0,1.47,7.34,2.06l2.05.15.44.88H1033l.44-.88,2.64-.15c5-.29,5.87-1,5.87-2.2V687.5c0-8.81-3.08-12.48-11.74-12.48-6,0-10.28,2.5-14.09,5.72v46.83c0,1.17.88,1.47,7.19,1.91l2.2.15.29.88H994.52Z' }),
                React.createElement('path', { d: 'M1118.26,696.31a71.87,71.87,0,0,1,.44-7.93l41.54.15a13.7,13.7,0,0,0,.29-2.06c0-12-8.81-20.11-23.78-20.11-18.94,0-31.85,15.56-31.85,34.5,0,9.69,3.61,18.12,9.64,23.83l11.91-6.57C1121.41,713.39,1118.26,705.86,1118.26,696.31Zm17.32-28.48c8.66,0,11.6,9.54,11.6,18.94l-28.18.29C1120.76,677.23,1127.51,667.83,1135.58,667.83Z' })
            ),
            React.createElement(
                'g',
                { className: 'fx-up-down' },
                React.createElement('path', { d: 'M1111.12,419.08l-10,27.88-7.69-18.13-11.3,6.39L1094.67,464h.29l-5,15.11c-2.5,7.49-3.89,11.81-7.41,12.55-6.94,2-13,8.48-8.3,8.48,8.22,0,12.92-6.92,16.88-19.69l5.73-17.77,15.85-43,.65-1.82Z' }),
                React.createElement('path', { d: 'M858,587.28c0,1.76-1.48,1.91-6,2.2l-2.58.39L849,591h31.41l-.44-1.12-1.85-.27c-6.46-.44-7.14-.86-7.14-2V551.71l-13,6.8Z' }),
                React.createElement('path', { d: 'M892,545.45v41.83c0,1.76-1.46,1.91-6,2.2l-2.56.39-.36,1.12h31.27l-.29-1.12-2-.27c-6.31-.44-7-.86-7-2V541c3-3.38,8.64-6,15.25-6,8.81,0,12.75,3.82,12.75,12.48v39.78c0,1.17-.74,1.91-5.88,2.2l-2.65.39L924,591h31.27l-.44-1.12-2.14-.27c-7.49-.59-7.72-1.3-7.72-2.18v-42c0-6.31-.95-11.45-4.32-14.68-2.79-2.94-6.64-4.26-11.33-4.26-10.42,0-18.88,7.78-24.6,12.62l-.41-.15.23-6-12.66,6.89A52.09,52.09,0,0,1,892,545.45Z' }),
                React.createElement('path', { d: 'M956.32,611.36c0-8.37,10.13-15,17.91-17.76v-.29c-9.83-1-16.44-5.43-16.44-11.3,0-7.78,9.1-13.21,16.59-14.53V567c-6.75-2.5-13.21-9.25-13.21-18.35,0-12.62,10.72-22,24.66-22a27.68,27.68,0,0,1,17,5.87l17.76-3.52-1.47,7.49-13.94-2.06-.15.44a17.78,17.78,0,0,1,5.58,12.62c0,     12-10.86,21.58-25.25,21.58a56,56,0,0,1-8.81-1c-5.14.88-8.66,3.38-8.66,7.49,0,4.7,4.26,6,12.18,6,4.11,0,11-.44,16.29-.44,14.09,0,21.58,6,21.58,16.73,0,16.44-15,28.92-37.87,28.92C965.13,626.77,956.32,621,956.32,611.36Zm54-5.73c0-7.34-5.43-12.18-19.08-12.62a109,109,0,0,         0-15.27.88c-5,1.91-9.69,7.78-9.69,13.8,0,9.69,9.39,16.29,21.87,16.29C1001.09,624,1010.34,615.47,1010.34,605.63Zm-11.89-56.37c0-12-2.64-21.43-12.77-21.43-7.19,0-11.74,7.63-11.74,19.38,0,12.77,4.4,20.7,11.89,20.7S998.45,560.42,998.45,549.26Z' }),
                React.createElement('path', { d: 'M1083,491.58l-23.12,5.58-.26.59,4.68.88c4.84.88,5.7,2.5,5.7,6.46V530h-.06c-4.55-2-9.25-2.84-15.56-2.84-14.83,0-33.17,10.91-33.17,34.69,0,18.06,11.3,30.55,25.83,30.55,9.39,0,16.59-5.42,22.9-13.05l.29.15.12,11.06,12.52-6.78c-.06-.48.13-1.06.13-1.78Zm-13,85.28a18.52,18.52,0,0,1-15.3,7.63c-12.33,0-19.91-12-19.91-26.42,0-15.85,5.93-29.06,17.09-29.06,7.63,0,15.12,6.31,18.12,14.68Z' }),
                React.createElement('path', { d: 'M1127.62,526.37c-19.52,0-33.76,14.83-33.76,33.32a33.21,33.21,0,0,0,3.87,15.78L1109.4,569a82,82,0,0,1-.72-11.25c0-14.39,5.73-30.24,18.64-30.24,5.14,0,8.51,2.35,11.3,5,3.57,3.57,5.87,9.57,7,16.51l11.51-6.34C1151.58,532.83,1140.87,526.37,1127.62,526.37Z' }),
                React.createElement('path', { d: 'M896.06,626c9,0,16.59,2,20.4,5.09L930.12,655H931l-.44-28.57-8.66,4.36c-4.84-2.64-15.71-6.41-25.39-6.41-32,0-53.29,20.28-53.29,48.47,0,14.54,5.47,26.52,14.71,34.85l9.26-5.1c-5.33-8-8.56-18.58-8.56-30.91C858.63,647.32,871.7,626,896.06,626Z' })
            ),
            React.createElement('polyline', {
                className: 'cls-4',
                points: '154.18,544.72 994.37,81.4' }),
            React.createElement('polyline', {
                className: 'cls-2',
                points: '606.03,547.87 1270.03,181.72' }),
            React.createElement('polyline', {
                className: 'cls-5',
                points: '753.18,466.73 1085.18,283.65' }),
            React.createElement('polyline', {
                className: 'cls-2',
                points: '444.68,786.5 1447.92,233.28' }),
            React.createElement('polyline', {
                className: 'cls-2',
                points: '1123.04,475.4 1486.49,274.98' }),
            React.createElement('polyline', {
                className: 'cls-3',
                points: '624.04,836.32 1627.28,283.1' }),
            React.createElement('polyline', {
                className: 'cls-5',
                points: '771.13,755.21 1249.22,491.58' }),
            React.createElement('polyline', {
                className: 'cls-2',
                points: '614.81,920.4 851.48,789.89' }),
            React.createElement('polyline', {
                className: 'cls-2',
                points: '808.39,893.22 1555.71,481.12' }),
            React.createElement('polyline', {
                className: 'cls-2',
                points: '1388.15,1001.06 1751.6,800.63' })
        );
    }
}
/**
 * Displays the ministry partner information
 * @information = Partner Information to display
 */
class MinsitryPartnerInformation extends React.Component {
    render() {
        var options = [];

        this.props.information.options.forEach((option, index) => {
            options.push(React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    null,
                    option.name
                ),
                React.createElement(
                    "div",
                    null,
                    option.details
                )
            ));
        });

        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                this.props.information.name
            ),
            React.createElement(
                "div",
                { "class": "add-bottom-margin" },
                this.props.information.address,
                React.createElement("br", null),
                this.props.information.city,
                ", ",
                this.props.information.state,
                " ",
                this.props.information.zipCode,
                React.createElement("br", null),
                this.props.information.website
            ),
            React.createElement(
                "h2",
                null,
                "Options"
            ),
            options
        );
    }
}
/**
 * Defines a row representing a ministry partner
 * @partner = The partner to display
 * @handleClick = Method to handle the click event
 */
class MinistryPartnerRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(data) {
        this.props.handleClick(data);
    }

    render() {
        return React.createElement(
            "div",
            {
                className: "[ one-third palm--one-whole ] [ bg-light-blue ] [ text-bigger cursor-point ] [ add-bottom-margin add-padding ] [ fx-bottom-border fx-dark-blue ]",
                onClick: () => this.handleClick(React.createElement(MinsitryPartnerInformation, { information: this.props.partner })) },
            this.props.partner.name
        );
    }
}
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
        this.props.partners.forEach((partner, index) => {
            rows.push(React.createElement(MinistryPartnerRow, {
                partner: partner,
                handleClick: this.handleClick }));
        });

        return React.createElement(
            "div",
            { className: "flex wrap align-items-stretch" },
            rows
        );
    }
}
/**
 * Returns a Call-to-Action button
 * 
 * @text = text of the button
 * @color = color of the button
 * @strokeColor = color of the box
 * @onClick = function to call when CTA is clicked
 */
class CTA extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(data) {
        this.props.onClick(data);
    }

    render() {
        //Check defaults
        var color = {
            color: ''
        };
        if (this.props.color !== undefined) {
            color.color = this.props.color;
        }

        var stroke = {
            stroke: ''
        };
        if (this.props.strokeColor !== undefined) {
            stroke.stroke = this.props.strokeColor;
        }

        return React.createElement(
            'div',
            { className: 'cta--wrapper', onClick: () => this.onClick(this.props.clickAction) },
            React.createElement(
                'svg',
                { height: '60', width: '320', xmlns: 'http://www.w3.org/2000/svg' },
                React.createElement('rect', { className: 'cta--shape', style: stroke, height: '60', width: '320' })
            ),
            React.createElement(
                'div',
                { className: 'cta--text', style: color },
                this.props.text
            )
        );
    }
}
/**
 * Defines the modal section of the page
 * @show: When true, the modal is shown
 */
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.hide = this.hide.bind(this);
    }

    hide() {
        this.props.hide();
    }

    render() {
        if (this.props.show === true) {
            return React.createElement(
                "div",
                { className: "modal content-wrapper" },
                React.createElement(
                    "div",
                    { className: "modal-close text-dark-blue", onClick: this.hide },
                    React.createElement("i", { className: "fa fa-3x fa-close", "aria-hidden": "true" })
                ),
                this.props.children
            );
        } else {
            return null;
        }
    }
}
/**
 * Defines the base page
 * @showModal: When true, shows the modal
 */
class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            modalContent: 'Initial Modal Content'
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(modalContent) {
        console.log("click");
        this.setState({
            showModal: true,
            modalContent: modalContent
        });
    }

    hideModal(e) {
        this.setState({ showModal: false });
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                Modal,
                { show: this.state.showModal, hide: this.hideModal },
                this.state.modalContent
            ),
            React.createElement(
                Section,
                { className: "[ bg-clouds bg-cover ] [ justify-content-center ] [ overflow-x-hidden ]" },
                React.createElement(Logo, null)
            ),
            React.createElement(
                Section,
                { className: "bg-light-blue" },
                React.createElement(
                    "div",
                    { className: "content-wrapper lock-width center-by-margin" },
                    React.createElement(
                        "h1",
                        { className: "center" },
                        "Thy Will Be Done"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "When his original students, the disciples, asked him how to pray, he said \u201CPray like this: \u2018Our father, who art in Heaven\u2026 thy kingdom come, thy will be done, on earth, as it is in Heaven.\u2019\u201D If you are a student and follower of Jesus, God is your father who has a will and a kingdom. This year, our church-wide vision is to pray vigilantly and work diligently to bring this prayer to fruition; to bring our father\u2019s will and kingdom here to earth."
                    ),
                    React.createElement(
                        "p",
                        { className: "center" },
                        React.createElement(CTA, { text: "Questions",
                            onClick: () => this.showModal(React.createElement(
                                "div",
                                null,
                                "Hi!"
                            )) })
                    )
                )
            ),
            React.createElement(
                Section,
                { className: "bg-medium-blue" },
                React.createElement(
                    "div",
                    { className: "content-wrapper" },
                    React.createElement(
                        "div",
                        { className: "lock-width center-by-margin" },
                        React.createElement(
                            "h1",
                            { className: "center" },
                            "Local Outreach Spree"
                        ),
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Complete eight kingdom assignments."
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Have your assignments initialed by each ministry partner after the assignment is completed."
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Return this form to the bookstore (Hudson) or the Welcome Center (Aurora/Highland Square) or to the church office during business hours to receive your free Caf\\u00e9 6:8 drink vouchers and cup or mug."
                            )
                        )
                    ),
                    React.createElement(MinistryPartnersTable, { showModal: this.showModal, partners: MINISTRY_PARTNERS })
                )
            ),
            React.createElement(
                Section,
                { className: "bg-dark-blue text-white" },
                React.createElement(
                    "div",
                    { className: "content-wrapper" },
                    React.createElement(
                        "h1",
                        { className: "center" },
                        "Assignments"
                    ),
                    React.createElement(
                        "p",
                        null,
                        React.createElement(Clock, { className: "center-by-margin", height: "250", width: "250" })
                    ),
                    React.createElement(
                        "p",
                        { className: "center" },
                        "Keep checking back! We\u2019ll have more assignments for you soon."
                    )
                )
            ),
            React.createElement(
                Section,
                { className: "bg-charcoal align-content-top auto-min-height text-white" },
                React.createElement(
                    "div",
                    { className: "content-wrapper" },
                    "\xA9 Copyright 2017"
                )
            )
        );
    }
}
/**
 * Defines a section on the page
 * @backgroundColor = background color
 * @backgroundImage = image to display in the background
 */
class Section extends React.Component {
    render() {
        // var background = <Background color="black" />;
        const divStyle = {
            backgroundColor: this.props.backgroundColor,
            backgroundImage: this.props.backgroundImage
        };

        var className = "section flex fill-screen-height ";
        if (this.props.className !== undefined) {
            className += this.props.className;
        }

        return React.createElement(
            "div",
            { className: className, style: divStyle },
            this.props.children
        );
    }
}
/**
 * Converts from degrees to radians.
 * 
 * @degrees = degrees to convert to radians
 **/
Math.radians = function (degrees) {
  return degrees * Math.PI / 180;
};

/**
 * Converts from radians to degrees.
 * 
 * @radians = radians to convert to degrees
 **/
Math.degrees = function (radians) {
  return radians * 180 / Math.PI;
};

/**
 * Finds a point on a circle
 * 
 * @cx = x coordinate of center of circle
 * @cy = y coordinate of the center of the circle
 * @r = radius of circle
 * @a = angle to find point at
 * 
 * RETURNS an object with an x property and y property
 **/
Math.pointOnCircle = function (cx, cy, r, a) {
  return {
    x: cx + r * Math.cos(a),
    y: cy + r * Math.sin(a)
  };
};

/**
 * Shorten line
 * 
 * @point = object containing an x and y property
 * 
 * RETURNS object with an x and y property
 **/
Math.shortenLine = function (point, shortenBy) {
  return {
    x: point.x < 0 ? point.x + shortenBy : point.x - shortenBy,
    y: point.y < 0 ? point.y + shortenBy : point.y - shortenBy
  };
};
const MINISTRY_PARTNERS = [{
    name: 'Blessings',
    address: '123 Street Road',
    city: 'Hudson',
    state: 'Ohio',
    zipCode: '44236',
    website: 'http://ccchapel.com',
    options: [{
        name: 'Graduation',
        details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
    }, {
        name: 'Annual Walk/Bike Event',
        details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
    }, {
        name: 'Other',
        details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
    }]
}, {
    name: 'Broken Chains',
    address: '123 Street Road',
    city: 'Hudson',
    state: 'Ohio',
    zipCode: '44236',
    website: 'http://ccchapel.com',
    options: [{
        name: 'Visit Urbean Caf\u00e9',
        details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
    }, {
        name: 'Annual Walk/Bike Event',
        details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
    }, {
        name: 'Other',
        details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
    }]
}, {
    name: 'Faithful Servants',
    address: '123 Street Road',
    city: 'Hudson',
    state: 'Ohio',
    zipCode: '44236',
    website: 'http://ccchapel.com',
    options: [{
        name: 'Visit a Faithful Servants Clinic',
        details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
    }, {
        name: 'Other',
        details: 'Integer imperdiet ullamcorper libero, eget consequat lectus feugiat nec. Cras condimentum, nulla nec convallis interdum, dui nisl iaculis nisl, sed dignissim ligula neque eu turpis. Suspendisse potenti.'
    }]
}];

ReactDOM.render(React.createElement(Page, null), document.getElementById('root'));
'use strict';
