import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import btnGradient from './themes/buttons/btnGradient';

const styles = theme => ({
    btnGradient
})

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="error" className={classes.btnGradient}>
                    Gradient
                </Button>
                <Button variant="contained" color="error">
                    Primary
                </Button>
                <Button variant="contained" color="error">
                    Secondary
                </Button>
                <Button variant="contained" color="error">
                    Error
                </Button>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App);