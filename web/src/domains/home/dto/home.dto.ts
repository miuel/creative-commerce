import type { z } from "zod";
import type { homePageSchema } from "../schema/home.schema";

export type HomePageDto = z.infer<typeof homePageSchema>;
