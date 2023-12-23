<?php

namespace App\Http\Resources\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class TransactionCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {   
        $totalIncome = $this->collection->where('type', 'income')->sum('amount');
        $totalExpense = $this->collection->where('type', 'expense')->sum('amount');
        $totalBalance = $totalIncome + $totalExpense;

        return [
            'data' => $this->collection,
            'totalIncome' => $totalIncome,
            'totalExpense' => $totalExpense,
            'totalBalance' => $totalBalance,
        ];
    }
}
