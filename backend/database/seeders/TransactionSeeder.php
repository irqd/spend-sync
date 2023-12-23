<?php

namespace Database\Seeders;

use App\Models\Transaction;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $payload = [
            [
                'user_id' => 1,
                'label' => 'Salary',
                'amount' => 1000,
                'type' => 'income',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'label' => 'Rent',
                'amount' => -500,
                'type' => 'expense',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'label' => 'Food',
                'amount' => -200,
                'type' => 'expense',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'label' => 'Salary',
                'amount' => 1000,
                'type' => 'income',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'label' => 'Electricity',
                'amount' => -500,
                'type' => 'expense',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::transaction(function () use ($payload) {
            Transaction::insert($payload);
        });
    }
}
