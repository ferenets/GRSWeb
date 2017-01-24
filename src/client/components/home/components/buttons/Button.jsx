import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Constants from '../../../../containers/root/constants.scss';
import {amber700} from 'material-ui/styles/colors';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
        };
        this.callTriggerBox = this.callTriggerBox.bind(this);
    }

    callTriggerBox() {
        return this.props.triggerBox();
    }

    render() {
        const paddingTop = Constants['paddingTopListMap'].slice(0, -2);
        const padding = Constants['padding'].slice(0, -2);
        const float = this.props.float;
        const styles = {
            root: {
                float: float,
                minWidth: 20,
                maxWidth: 50,
                padding: 0,
                marginTop: -paddingTop,
                marginRight: -padding,
                marginLeft: -padding,
                height: 25,
            },

            label: {
                color: '#fff',
                fontSize: 20,
                lineHeight: 20 + 'px',
                fontWeight: 900,
            }
        };
        return (
            <div>
                <RaisedButton
                    label={
                        this.state.open ? '\u2039\u2039' : '\u203A\u203A'
                    }
                    style={styles.root}
                    labelStyle={styles.label}
                    onClick={this.callTriggerBox}
                    backgroundColor={amber700}
                />
            </div>
        )
    };
};