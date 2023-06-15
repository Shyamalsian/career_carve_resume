import React, { useState, useRef } from 'react'
import ItemCard from './ItemCard'
import { Box, Typography, Button } from '@mui/material'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const Items = () => {
    const [data, setData] = useState([
        {
            id: '1',
            label: 'Profile Summary',
            include: true,
            description: 'Gives summary of your profile',
            edit: false
        },
        {
            id: '2',
            label: 'Academic and Cocurricular Achievements',
            include: true,
            description: 'Mention your achievements so far',
            edit: false
        },
        {
            id: '3',
            label: 'Summer internship Experience',
            include: true,
            description: 'Add your summer internship experience if you have any',
            edit: false
        },
        {
            id: '4',
            label: 'Work Experience',
            include: true,
            description: 'Add if there is any work experience of yours',
            edit: false
        },
        {
            id: '5',
            label: 'Projects',
            include: true,
            description: 'Add if you have any projects of your own',
            edit: false
        },
        {
            id: '6',
            label: 'Certificates',
            include: true,
            description: 'Mention the certificates you have got so far',
            edit: false
        },
        {
            id: '7',
            label: 'Leadership Positions',
            include: true,
            description: 'Mention your leadership qualities',
            edit: false
        },
        {
            id: '8',
            label: 'Extracurricular',
            include: true,
            description: 'Add your extracurricular activities',
            edit: false
        },
        {
            id: '9',
            label: 'Education',
            include: true,
            description: 'Give your education details',
            edit: false
        },


    ])

    const updateLabel = (index, newLabel) => {
        const updateData = [...data]
        updateData[index].label = newLabel

        setData(updateData)
    }

    const updateInclude = (index) => {
        const updateData = [...data]
        updateData[index].include = !updateData[index].include

        setData(updateData)
    }

    const setEdit = (value, index) => {
        const updateData = [...data]
        // updateData[index].edit = !updateData[index].edit
        updateData[index].edit = value

        setData(updateData)
    }

    const handleDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const updatedItems = Array.from(data);
        const [removed] = updatedItems.splice(result.source.index, 1);
        updatedItems.splice(result.destination.index, 0, removed);

        setData(updatedItems);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh">
            <Box sx={{ width: '53vw' }}>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="card-list">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {data.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <ItemCard {...item} index={index} setEdit={setEdit} updateInclude={updateInclude} updateLabel={updateLabel} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </Box>
            <Box>
                <Button variant="contained" sx={{ backgroundColor: '#8A4893', textTransform: 'none', width: "429px", height: "52px", borderRadius: "10px", top: "32px" }}>
                    Save and Next
                </Button>
            </Box>
        </Box>
    )
}

export default Items;