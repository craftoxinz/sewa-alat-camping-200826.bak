<?php

namespace Database\Seeders;

use App\Models\EquipmentCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EquipmentCategorySeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // EquipmentCategory::factory(10)->create();

        $equipmentCategories = [
            [
                'name' => 'Tents',
                'description' => 'Shelter equipment designed for camping and outdoor activities.',
            ],
            [
                'name' => 'Sleeping Bags',
                'description' => 'Sleeping equipment designed to provide warmth and comfort during outdoor activities.',
            ],
            [
                'name' => 'Sleeping Mats',
                'description' => 'Mats designed to provide insulation and comfort when sleeping or resting outdoors.',
            ],
            [
                'name' => 'Backpacks',
                'description' => 'Packs designed to carry camping and hiking equipment during outdoor activities.',
            ],
            [
                'name' => 'Cooking Equipment',
                'description' => 'Equipment used for cooking and preparing food during camping and outdoor activities.',
            ],
            [
                'name' => 'Eating & Drinking Gear',
                'description' => 'Equipment used for preparing, serving, and consuming food and beverages outdoors.',
            ],
            [
                'name' => 'Outdoor Clothing',
                'description' => 'Clothing designed to provide protection and comfort during outdoor activities.',
            ],
            [
                'name' => 'Lighting',
                'description' => 'Lighting equipment used to provide illumination during camping and other outdoor activities.',
            ],
            [
                'name' => 'Navigation & Safety',
                'description' => 'Equipment used to support navigation and safety during hiking, camping, and outdoor activities.',
            ],
            [
                'name' => 'Camping Accessories',
                'description' => 'Supporting equipment that provides additional comfort and convenience during camping activities.',
            ],
        ];

        $seed = collect($equipmentCategories)->map(fn ($equipmentCategory) => [
            ...$equipmentCategory,
            'created_at' => now(),
            'updated_at' => now(),
        ])->toArray();

        // Bulk insert
        EquipmentCategory::insert($seed);
    }
}
