import { Title, Image, Card, Text, Group, Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useStyles } from './ProductCard.style';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../AddToCart/add-to-cart';
import { CartCounter } from '../AddToCart/cart-counter';
import { FavouriteBtn } from '../FavouriteButton';


// const images = [
//     'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//     'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//     'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//     'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
//     'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
// ];

export const ProductCard = ({ product }) => {

    const { classes } = useStyles();

    // const slides = images.map((image) => (
    //     <Carousel.Slide key={image}>
    //         <Image src={image} height={220} />
    //     </Carousel.Slide>
    // ));

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
                    <Carousel.Slide>
                        {/* <Image src={product?.product_image} height={250} /> */}
                        <div style={{ display: 'table', margin: '0 auto' }}>
                            <LazyLoadImage
                                style={{ scale : '1.3'}}
                                height="250px"
                                alt="Product_image"
                                effect="blur"
                                src={product?.product_image} />
                        </div>

                    </Carousel.Slide>
                </Carousel>
            </Card.Section>


            <div className={classes.product_card_content_wrapper}>
                <div className={classes.product_card_title}>
                    <Text weight={600} size="md">
                        {` ${product?.title?.slice(0, 60)} ${product?.title.length > 60 ? ' ... ' : ' '} `}
                    </Text>
                </div>
                <div className={classes.product_card_wishlist}>
                    <FavouriteBtn />
                </div>
            </div>


            <div className={classes.product_card_footer_wrapper}>

                <div className={classes.product_card_price}>
                    <Title order={4} className={classes.price}>
                        {product?.price < product?.sale_price ? `৳‎ ${product?.sale_price}` : `৳‎ ${product?.price}`}
                    </Title>

                    <Title order={5} className={classes.price}>
                        <del>{product?.price < product?.sale_price ? `৳‎ ${product?.price}` : ''}</del>
                    </Title>

                </div>
                <div className={classes.product_card_addtocart}>
                    <AddToCart />
                    {/* <CartCounter /> */}
                </div>

            </div>

        </Card >
    );
};