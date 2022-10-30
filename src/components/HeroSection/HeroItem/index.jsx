import { createStyles, Text, Title, TextInput, Button, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { HeroItemStyles } from './HeroItem.style.js';



export const HeroItem = ({title, subTitle, image}) => {

  const { classes } = HeroItemStyles();

  return (
    <Carousel.Slide>
        <div className={classes.wrapper} style={{backgroundImage: `url(${image})`,}}>
            <div className={classes.body}>
                <Title className={classes.title}>
                    {title.split(' ').slice(0, 3).join(' ')}
                </Title>
                <Title className={classes.title}>
                    {title.split(' ').slice(2).join(' ')}
                </Title>
                <Text className={classes.subTitle}>
                    {subTitle}
                </Text>
                <div className={classes.controls}>
                <TextInput
                    placeholder="Your email"
                    classNames={{ input: classes.input, root: classes.inputWrapper }}
                />
                <Button className={classes.control}>Subscribe</Button>
                </div>
            </div>
        </div>
    </Carousel.Slide>
    
  );
}
