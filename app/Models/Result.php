<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $table = 'results';

    protected $fillable = [
        'ip',
        'device',
        'player_id'
    ];

    public $timestamps = false;
}
