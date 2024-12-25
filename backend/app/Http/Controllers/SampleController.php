<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SampleController extends Controller
{
    /**
     * サンプルコントローラ
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $arr = [
            [
                'id' => 1,
                'name' => '要件定義',
            ],
            [
                'id' => 2,
                'name' => '内部設計',
            ],
            [
                'id' => 3,
                'name' => '外部設計',
            ],
            [
                'id' => 4,
                'name' => '実装',
            ],
            [
                'id' => 5,
                'name' => 'テスト',
            ],
            [
                'id' => 6,
                'name' => 'リリース',
            ],
            [
                'id' => 7,
                'name' => '保守',
            ],
        ];

        return response()->json([
            'message' => 'Hello, this is a sample response!',
            'data' => $arr,
        ]);
    }
}
