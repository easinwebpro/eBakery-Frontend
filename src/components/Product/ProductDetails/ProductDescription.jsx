import React from 'react';
import { Spoiler, TypographyStylesProvider } from '@mantine/core';
import ReactMarkdown from 'react-markdown'

export const ProductDescription = ({ description }) => {
    return (
        <div>
            <Spoiler maxHeight={150} showLabel="Show more" hideLabel="Hide" mb='lg'>
                <ReactMarkdown>
                    {description}
                </ReactMarkdown>
            </Spoiler>
        </div>
    )
};
