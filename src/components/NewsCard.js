import React from 'react';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteSweepSharpIcon from '@material-ui/icons/DeleteSweepSharp';
import { UndoOutlined } from '@material-ui/icons';



export default function NewsCard(props) {
    const { fullDocUrl, title, label, description, onDelete, undoDelete, pressReleaseUrl } = props;

    const [visible, setVisible] = React.useState(true);
    const [deleteTimer, setDeleteTimer] = React.useState(0);

    const handleHideClick = () => {
        setVisible(false);
        if (onDelete) {
            setDeleteTimer(setTimeout(onDelete, 3100));
        }
    }

    const handleUndoHide = () => {
        clearTimeout(deleteTimer);
        if (undoDelete) {
            undoDelete();
        }
        setVisible(true);
    }

    const styles = {
        root: {
            transition:"all 3s ease-in-out",
            opacity: visible ? 1 : 0,
            width: "30%",
            padding: "10px"
        },
        card: {
            flex: 1,
            height: "100%",
            innerHeight: "100%",
            justify: "space-between",
            display: "flex",
            flexDirection: "column",
        },
        undoButton: {
            justifyContext: "center",
            fontSize: "50px",
        },
        actionsContainer: {
            marginBottom: 'auto',
        }
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
                <Card raised={true} style={styles.card} >
                    <CardHeader
                        title={title}
                        subheader={label}
                        action={
                            <IconButton aria-label="hide" onClick={handleHideClick}>
                                <DeleteSweepSharpIcon />
                            </IconButton>
                        }
                    />
                    <CardContent style={{flexGrow: 1}}>
                        {description}
                    </CardContent>
                    <CardActions style={styles.actionsContainer}>
                        <Button size="small" color="primary" href={pressReleaseUrl} target="_blank" >
                            Press Release
                        </Button>
                        <Button size="small" color="primary" href={fullDocUrl} target="_blank" >
                            Full document
                        </Button>
                    </CardActions>
                </Card>
            }
        </Box>
    )
}