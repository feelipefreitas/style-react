import { createMuiTheme } from '@material-ui/core/styles';
import { palette } from './palette';
import { typography } from './typography';

export default createMuiTheme({
    palette,
    typography,
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 68,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            } 
        }     
    }
});