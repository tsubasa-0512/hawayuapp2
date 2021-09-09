<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Inquiry;

class UserController extends Controller
{
    public function getUserInfo(Request $request) {
        $user_id =  $request->id;  
        $user = User::with('company')->where('id', $user_id)->first(); 
        $user_inquiry = Inquiry::with('results.answer')
                        ->where('user_id', $user_id)
                        ->orderBy('created_at', 'desc')
                        ->first();

        return response()->json([
            'user' => $user,
            'hawayu' => $user_inquiry
        ]);
    }
}
