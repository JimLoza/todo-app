import React, { FC, ReactElement } from 'react'

import { TextField } from '@mui/material'


export const TaskDescriptionField: FC = (): ReactElement => {
    return (
        <TextField
            id='description'
            name='Description'
            label='Description'
            placeholder='Description'
            variant='outlined'
            size='small'
            multiline
            rows={4}
            fullWidth
        />
    )
}
