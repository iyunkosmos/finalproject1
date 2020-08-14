import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import BarChartIcon from '@material-ui/icons/BarChart';
import {Link} from "react-router-dom";

export const mainListItems = (
    <div>
        <Link to={'/dashboard'}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText style={{color: 'black'}} primary="Dashboard"/>
            </ListItem>
        </Link>
        <Link to={'/inventory'}>
            <ListItem button>
                <ListItemIcon>
                    <SettingsIcon/>
                </ListItemIcon>
                <ListItemText  style={{color: 'black'}} primary="Inventory"/>
            </ListItem>
        </Link>
        <Link to={'/closed'}>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText  style={{color: 'black'}} primary="Closed Forms"/>
            </ListItem>
        </Link>
    </div>
);

