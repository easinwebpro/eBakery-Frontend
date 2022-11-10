export const categories_dtos = (data) => {

    const format_category = data?.map((category) => {

        return {
            id: category.id,
            slug: category.attributes.slug,
            name: category.attributes.name,
            category_image: category.attributes?.category_image.data?.attributes?.url,
        }
    });

    return format_category;
}