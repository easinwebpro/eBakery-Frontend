import { createStyles, Text, Title, TextInput, Button, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { HeroItem } from './HeroItem';

const heroSectionData = [
	{
		title: 'Don’t miss amazing grocery deals',
		subTitle: 'Sign up for the daily newsletter',
		image: 'https://nest-nextjs.vercel.app/assets/imgs/slider/slider-1.png',
	},
	{
		title: 'Fresh Vegetables Big discount',
		subTitle: 'Save up to 50% off on your first order',
		image: 'https://nest-nextjs.vercel.app/assets/imgs/slider/slider-2.png',
	},
];

export const HeroSection = () => {
  return (
    <div style={{marginBottom: '40px'}}>
      <Carousel slideSize="100%" height={'auto'} withControls={false} withIndicators>
      {heroSectionData.map((item) => (
        <HeroItem key={item.title} title={item.title} subTitle={item.subTitle} image={item.image}/>
      ))}
    </Carousel>
    </div>
  );
}


