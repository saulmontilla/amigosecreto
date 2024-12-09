<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\CheckDeviceAndIP;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('index')->middleware(CheckDeviceAndIP::class);
Route::post('/', [HomeController::class, 'store'])->name('store');
Route::get('/result/{player}', [HomeController::class, 'result'])->name('result');
Route::get('/player', [HomeController::class, 'player'])->name('player');
