import { Title, Image, Card, Text, Group, Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useStyles } from './ProductCard.style';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../AddToCart/add-to-cart';
import { CartCounter } from '../AddToCart/cart-counter';
import { FavouriteBtn } from '../FavouriteButton';


export const ProductCard = ({ product, carts = {} }) => {

    const { classes } = useStyles();

    return (
        <Card radius="md" withBorder p="md" shadow="sm">
            <Card.Section>

                {
                    product?.product_image == undefined ?
                        <Image
                            width='100%'
                            height={250}
                            radius='md'
                            withPlaceholder
                        />
                        :
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
                                        style={{ scale: '1.3' }}
                                        height="250px"
                                        alt="Product_image"
                                        effect="blur"
                                        src={product?.product_image} />

                                </div>

                            </Carousel.Slide>
                        </Carousel>

                }

            </Card.Section>


            <div className={classes.product_card_content_wrapper}>
                <div className={classes.product_card_title}>
                    <Text weight={600} size="md">
                        {` ${product?.title?.slice(0, 60)} ${product?.title.length > 60 ? ' ... ' : ' '} `}
                    </Text>
                </div>
                <div className={classes.product_card_wishlist}>
                    <FavouriteBtn product={product} />
                </div>
            </div>


            <div className={classes.product_card_footer_wrapper}>

                <div className={classes.product_card_price}>
                    {
                        product?.price > 0 && product?.sale_price === null &&
                        <Title order={4} className={classes.price}>
                            {`৳‎ ${product?.price}`}
                        </Title>
                    }
                    {
                        product?.price > product?.sale_price && product?.sale_price !== null && <>
                            <Title order={4} className={classes.price}>
                                {`৳‎ ${product?.sale_price}`}
                            </Title>

                            <Title order={5} className={classes.price}>
                                <del>{`৳‎ ${product?.price}`}</del>
                            </Title>

                        </>
                    }




                </div>
                <div className={classes.product_card_addtocart}>
                    {
                        carts[product?.id] ?
                            <CartCounter product={product} />
                            :
                            <AddToCart product={product} />
                    }
                </div>

            </div>

        </Card >
    );
};