<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\TransactionRequest;
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

    public function store(TransactionRequest $request)
    {
        $data = $request->validated();

        DB::transaction(function () use ($data) {
            Transaction::create([
                'user_id' => auth()->user()->id,
                'label' => $data['label'],
                'amount' => $data['amount'],
                'type' => $data['amount'] < 0 ? 'expense' : 'income',
            ]);
        });

        return response()->json([
            'status' => 'success',
            'message' => 'Transaction created',
        ], 201);
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
