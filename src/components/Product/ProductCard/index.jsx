import { Grid, createStyles, Image, Card, Text, Group, Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons';
import { useStyles } from './ProductCard.style';
import { useDispatch, useSelector } from 'react-redux';

const images = [
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
];

export const ProductCard = () => {

    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.product);
    console.log(product, 'Ok')

    const { classes } = useStyles();

    const slides = images.map((image) => (
        <Carousel.Slide key={image}>
            <Image src={image} height={220} />
        </Carousel.Slide>
    ));

    return (
        <Card radius="md" withBorder p="md" shadow="sm">
            <Card.Section>
                <Carousel
                    withIndicators
                    loop
                    classNames={{
                        root: classes.carousel,
                        controls: classes.carouselControls,
                        indicator: classes.carouselIndicator,
                    }}
                >
                    {slides}
                </Carousel>
            </Card.Section>


            <div className={classes.product_card_content_wrapper}>
                <div className={classes.product_card_title}>
                    <Text weight={600} size="md">
                        Lorem ipsum dolor sit love and lose to much dasdsad...
                    </Text>
                </div>
                <div className={classes.product_card_wishlist}>
                    <IconStar size={20} />
                </div>
            </div>


            <div className={classes.product_card_footer_wrapper}>

                <div className={classes.product_card_price}>
                    <Text size="sm" p weight={600} className={classes.price}>
                        ৳‎ 397
                    </Text>

                    <Text size="sm" p weight={500} className={classes.price}>
                        <del>৳‎ 310</del>
                    </Text>

                </div>
                <div className={classes.product_card_addtocart}>
                    <Button radius="md" fullWidth>Book now</Button>
                </div>

            </div>

        </Card >
    );
};