import * as z from 'zod';

export const equipmentCategorySchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
});

export type EquipmentCategoryType = z.infer<typeof equipmentCategorySchema>;
