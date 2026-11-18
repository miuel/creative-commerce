import { IMAGE_FRAGMENT } from "./image-fragment";

export const HERO_FRAGMENT = `
    title,
    description,
    button,
    image {
        ${IMAGE_FRAGMENT}
    },
    showHero
`;
