<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EquipmentCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Response;

class EquipmentCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $equipmentCategories = EquipmentCategory::latest()->get();

        return inertia('admin/equipment-categories/index', compact('equipmentCategories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return inertia('admin/equipment-categories/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = request()->validate([
            'name' => [
                'required',
                'unique:equipment_categories',
                'string',
                'max:255',
            ],
            'description' => ['required', 'string', 'max:500'],
        ]);

        EquipmentCategory::create([
            ...$validated,
        ]);

        return redirect()->route('admin.equipment-categories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(EquipmentCategory $equipmentCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EquipmentCategory $equipmentCategory): Response
    {
        return inertia('admin/equipment-categories/edit', compact('equipmentCategory'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, EquipmentCategory $equipmentCategory): RedirectResponse
    {
        $validated = request()->validate([
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('equipment_categories')->ignore($equipmentCategory),
            ],
            'description' => ['required', 'string', 'max:500'],
        ]);

        $equipmentCategory->update([
            ...$validated,
        ]);

        return redirect()->route('admin.equipment-categories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EquipmentCategory $equipmentCategory)
    {
        $equipmentCategory->delete();
    }
}
