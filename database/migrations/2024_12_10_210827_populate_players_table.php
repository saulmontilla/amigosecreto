<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Player;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Player::insert([
            ['name' => 'Wilyenlith'],
            ['name' => 'Ana'],
            ['name' => 'Wilmay'],
            ['name' => 'Saul'],
            ['name' => 'Yeniteth'],
            ['name' => 'Tienen'],
            ['name' => 'Derwin'],
            ['name' => 'Zulay'],
            ['name' => 'Alexander'],
            ['name' => 'Anderson'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
