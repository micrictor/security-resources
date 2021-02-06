import React from 'react';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import DeleteSweepSharpIcon from '@material-ui/icons/DeleteSweepSharp';
import { UndoOutlined } from '@material-ui/icons';



export default function NewsCard(props) {
    const { title, label, description, onDelete } = props;

    const [visible, setVisible] = React.useState(true);
    let deleteTimer;

    const handleHideClick = () => {
        setVisible(false);
        if (onDelete) {
            deleteTimer = setTimeout(() => onDelete(), 1500);
        }
    }

    const handleUndoHide = () => {
        clearTimeout(deleteTimer);
        setVisible(true);
    }

    const styles = {
        root: {
            transition:"all 3s ease-in-out",
            opacity: visible ? 1 : 0,
        },
        undoButton: {
            justifyContext: "center",
            fontSize: "50px"
        },
    }

    return (
        <Box style={styles.root} alignContent="center" alignItems="center">
            { !visible &&
                <IconButton
                    color="inherit"
                    aria-label="undo-hide"
                    onClick={handleUndoHide}
                >
                    <UndoOutlined style={styles.undoButton} />
                </IconButton>
            }
            { visible &&
                <Card raised={true} >
                    <CardHeader
                        title={title}
                        subheader={label}
                        action={
                            <IconButton aria-label="hide" onClick={handleHideClick}>
                                <DeleteSweepSharpIcon />
                            </IconButton>
                        }
                    />
                    <CardContent>
                        {description}
                    </CardContent>
                </Card>
            }
        </Box>
    )
}