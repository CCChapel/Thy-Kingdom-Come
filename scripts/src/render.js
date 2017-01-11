//const MINISTRY_PARTNERS = ;
function breakLine(text) {
    var regex = /(<br \/>)/g;
    return text.split(regex).map(function(line) {
        return line.match(regex) ? React.createElement('br') : line;
    });
}

var HtmlToReactParser = require('html-to-react').Parser;

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);