<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\TransactionCollection;

class TransactionController extends Controller
{
    public function index()
    {   
        $transactions = Transaction::query()
        ->where('user_id', auth()->user()->id)
        ->orderBy('created_at', 'desc')
        ->get();

        return new TransactionCollection($transactions);
    }

    public function store(Request $request)
    {
        return response()->json([
            'message' => 'Transaction store'
        ]);
    }

    public function update(Request $request, Transaction $transaction)
    {
        return response()->json([
            'message' => 'Transaction update'
        ]);
    }

    public function destroy(Transaction $transaction)
    {
        return response()->json([
            'message' => 'Transaction destroy'
        ]);
    }
}
