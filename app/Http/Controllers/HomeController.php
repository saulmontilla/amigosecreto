<?php

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\Result;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function store(Request $request)
    {
        $players_available = Player::where('taken', 0)->get();

        if ($players_available->isEmpty()) {
            return response()->json('Ya no hay jugadores disponibles', 404);
        }

        $random_player = $players_available->random();

        $ip = $request->ip();
        $device = $request->header('User-Agent');

        Result::create([
            'ip' => $ip,
            'device' => $device,
            'player_id' => $random_player->id
        ]);

        $random_player->taken = 1;
        $random_player->save();

        return redirect()->route('result', [
            'player' => Crypt::encryptString($random_player->id)
        ]);
    }

    public function result(Request $request, string $player): \Inertia\Response
    {
        try {
            $player_id = Crypt::decryptString($player);
            $player = Player::findOrFail($player_id);
        } catch (\Exception) {
            abort(403, 'Codigo de resultado incorrecto');
        }

        return Inertia::render('Result', ['player' => $player]);
    }

    public function player()
    {
        $players = Player::all();

        return response()->json($players);
    }
}
