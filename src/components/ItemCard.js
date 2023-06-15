import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Stack, Switch, IconButton, Popover } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '@mui/material/Button';
import YesTogg from '../Asserts/on.png'
import NoTogg from '../Asserts/off.png'

const ItemCard = ({ label, edit, include, description, updateLabel, updateInclude, setEdit, index }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [value, setValue] = useState(label);
    const length = value.length

    const inputRef = useRef(null);

    useEffect(() => {
        if (edit) {
            inputRef.current.focus();
        }
    }, [edit]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.width = `${value.length * 8}px`;
        }
    }, [value]);

    const handleDisplay = () => {
        updateInclude(index)
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '2vh', width: '100%' }}>
            <Box sx={{
                borderBottom: '0.15px solid #ECECEC'
            }}>
                <Box sx={{ display: 'felx', alignItems: 'center', justifyContent: 'center', marginBottom: '10px', backgroundColor: edit ? 'white' : '#B6B6B6', height: '40px' }}>
                    <Stack direction="row" spacing={1} paddingTop='6px'>
                        <Typography>
                            <MenuIcon />
                        </Typography>

                        <Typography>
                            <InfoOutlinedIcon cursor="pointer" aria-describedby={id} onClick={handleClick} />
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Typography sx={{ p: 2 }}>{description}</Typography>
                            </Popover>
                        </Typography>

                        <Typography sx={{ width: '40vw', paddingTop: '0' }} ml="40px"  >
                            <input
                                name="value"
                                readOnly={!edit}
                                value={value}
                                style={{
                                    height: '25px', paddingLeft: '8px', marginRight: '30vw', border: 'none', backgroundColor: edit ? 'white' : '#B6B6B6', display: 'flex',
                                    justifyContent: 'flex-start'
                                }}
                                onChange={(e) => setValue(e.target.value)}
                                disabled={!include}
                                ref={inputRef}

                            />
                        </Typography>
                        <Typography sx={{ width: '5vw' }}>
                            {edit ? (
                                <Button
                                    onClick={() => {
                                        setEdit(false, index);
                                        updateLabel(index, value);
                                    }}
                                    sx={{ color: 'black', mr: '10px' }}
                                    disabled={!include}
                                >
                                    <Typography sx={{ textTransform: 'none', paddingBottom: '0' }}>Save</Typography>
                                </Button>
                            ) : (
                                <IconButton
                                    onClick={() => {
                                        setEdit(true, index);
                                    }}
                                    sx={{ ml: '3vw', paddingTop: '0' }}
                                    disabled={!include}
                                >
                                    <EditOutlinedIcon cursor="pointer" />
                                </IconButton>
                            )}
                        </Typography>
                        {/* <Typography >
                            <Switch sx={{ color: 'purple' }} checked={include} onClick={() => updateInclude(index)} />
                        </Typography> */}
                        <Typography sx={{ ml: "30px", marginBottom: "0.1vw" }} cursor='pointer'>
                            {
                                include ? (
                                    <div cursor='pointer'>
                                        <img
                                            style={{ cursor: 'pointer' }}
                                            src={YesTogg}
                                            alt="Yes"
                                            width="40vw"
                                            sx={{
                                                position: 'fixed',
                                                top: '9px',
                                                left: '10px',

                                                paddingTop: '0',

                                            }}
                                            onClick={handleDisplay}
                                        />
                                    </div>

                                ) : (
                                    <img src={NoTogg}
                                    style={{ cursor: 'pointer' }}
                                        alt="Yes"
                                        width="40vw" // Increase the width as desired
                                        sx={{
                                            position: 'fixed', // Make the position fixed
                                            top: '10px', // Adjust the top position as needed
                                            // left: '10px', 
                                            marginRight: '10px',
                                            paddingTop: '0',
                                        }}
                                        onClick={handleDisplay}
                                    />

                                )

                            }</Typography>


                    </Stack>

                </Box>
            </Box>
        </Box>
    );
};

export default ItemCard;
