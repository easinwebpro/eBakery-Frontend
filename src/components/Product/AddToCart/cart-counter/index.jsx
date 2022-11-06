import { useRef, useState } from 'react';
import { NumberInput, NumberInputHandlers, ActionIcon } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons';

import { useStyles } from './cart-counter.styles.js';

export const CartCounter = ({ productQuantity, onDecrement, onIncrement }) => {

    const { classes } = useStyles();
    const handlers = useRef(null);
    const [value, setValue] = useState(1);

    return (
        <div className={classes.wrapper}>
            <ActionIcon
                size={28}
                variant="transparent"
                onClick={() => handlers.current?.decrement()}
                disabled={false}
                className={classes.control}
                onMouseDown={(event) => event.preventDefault()}
            >
                <IconMinus size={20} stroke={2} />
            </ActionIcon>

            <NumberInput
                variant="unstyled"
                handlersRef={handlers}
                value={value}
                onChange={setValue}
                classNames={{ input: classes.input }}
            />

            <ActionIcon
                size={28}
                variant="transparent"
                onClick={() => handlers.current?.increment()}
                disabled={false}
                className={classes.control}
                onMouseDown={(event) => event.preventDefault()}
            >
                <IconPlus size={20} stroke={2} />
            </ActionIcon >
        </div >
    );
};
