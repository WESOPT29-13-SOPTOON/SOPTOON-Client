import { deviceQuery } from "./Screen";

export const applyMediaQuery = (device) => `@media screen and ${deviceQuery[device]}`;
