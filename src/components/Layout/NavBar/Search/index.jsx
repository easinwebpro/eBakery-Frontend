import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons';

export const SearchBar = ( TextInputProps) => {

    const theme = useMantineTheme();
    return (
        <TextInput
            icon={<IconSearch size={18} stroke={1.5} />}
            radius="xl"
            size="md"
            rightSection={
                <ActionIcon size={32} radius="xl" color="green" variant="filled">
                    {theme.dir === 'ltr' ? (
                        <IconArrowRight size={18} stroke={1.5} />
                    ) : (
                        <IconArrowLeft size={18} stroke={1.5} />
                    )}
                </ActionIcon>
            }
            placeholder="Search questions"
            rightSectionWidth={42}
        />
    );
};