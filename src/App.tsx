/*
* This file demonstrates a basic ReactXP app.
*/
// This example uses ExperimentalNavigation on iOS and Android
import Navigator, { Types, NavigatorDelegateSelector as DelegateSelector } from 'reactxp-navigation';
import RX = require('reactxp');

const styles = {
    // Standard navigator style should be an object. So we have to disable caching here.
    navCardStyle: RX.Styles.createViewStyle({
        backgroundColor: '#f5fcff'
    }, false)
};

class App extends RX.Component<{}, null> {
    render() {
        return (<RX.Text>Hello world</RX.Text>);
    }
}

export = App;
