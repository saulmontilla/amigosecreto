<?php

namespace App\Http\Middleware;

use App\Models\Result;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Crypt;

class CheckDeviceAndIP
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $ip = $request->ip();
        $device = $request->header('User-Agent');

        $result = Result::where('device', $device)
            ->where('ip', $ip)
            ->first();

        if ($result) {
            return redirect()->route('result', [
                'player' => Crypt::encryptString($result->player_id)
            ]);
        }

        return $next($request);
    }
}
