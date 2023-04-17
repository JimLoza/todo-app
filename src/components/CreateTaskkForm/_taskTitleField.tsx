import React, {FC, ReactElement} from 'react'

import { TextField } from '@mui/material'


export const TaskTitleField: FC = (): ReactElement => {
    return (
        <TextField
            id='title'
            label='Title'
            placeholder='Title'
            variant='outlined'
            size='small'
            name='title'
            fullWidth
        />
    )
}
