import { useState } from 'react';
import { Tabs } from '@mantine/core';

export const TabBottom = () => {
    const [activeTab, setActiveTab] = useState('description');
    console.log(activeTab)
    return (
        <Tabs value={activeTab} onTabChange={setActiveTab} color="green" radius="md" defaultValue="gallery" mt='lg' mb={'md'}>
            <Tabs.List >
                <Tabs.Tab value="description">Description</Tabs.Tab>
                {/* <Tabs.Tab value="others">Other's</Tabs.Tab> */}
            </Tabs.List>
        </Tabs>
    );
}