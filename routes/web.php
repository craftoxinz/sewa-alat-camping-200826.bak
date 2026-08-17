<?php

use App\Http\Controllers\Admin\EquipmentCategoryController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource('equipment-categories', EquipmentCategoryController::class);
    });
});

require __DIR__.'/settings.php';
