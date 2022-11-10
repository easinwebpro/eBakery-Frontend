export const product_dtos = (data) => {

    const format_Product = data?.map((product) => {

        const salePrice = product.attributes.sale_price === 0 ? null : (product.attributes.sale_price > product.attributes.price ? 'Invalid Price' : product.attributes.sale_price);

        return {
            id: product.id,
            slug: product.attributes.slug,
            title: product.attributes.title,
            description: product.attributes?.discription,
            price: product.attributes?.price,
            sale_price: salePrice,
            stock: product.attributes?.stock,
            product_image: product.attributes?.product_image.data?.attributes?.url,
            product_gallery: product.attributes?.product_gallery || null,

            category: product.attributes?.category?.data?.attributes || null,
            product_variation: product.attributes?.product_variation || null,
        }
    });

    return format_Product;
}