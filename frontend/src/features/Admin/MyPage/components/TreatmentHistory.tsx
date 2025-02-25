import { Button, Card, CardBody, Input } from '@nextui-org/react';
import { Search } from 'lucide-react';
import React from 'react';
import type { Treatment } from '../../types';

export const TreatmentHistory: React.FC = () => {
    const [treatments, setTreatments] = React.useState<Treatment[]>([
        {
            id: 1,
            clientName: '山田 花子',
            service: 'カット',
            date: '2024-03-15',
            time: '14:00',
            notes: 'ボブスタイルへのカット。とても喜んでいただけました。',
            price: 4800,
        },
        {
            id: 2,
            clientName: '鈴木 美咲',
            service: 'カット＆カラー',
            date: '2024-03-14',
            time: '11:00',
            notes: 'アッシュベージュのカラーリング。次回は2ヶ月後の予定。',
            price: 12800,
        },
        // 他の施術履歴データ
    ]);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">施術履歴</h2>
                <div className="w-64">
                    <Input
                        placeholder="顧客名で検索"
                        startContent={<Search className="h-5 w-5 text-gray-400" />}
                    />
                </div>
            </div>

            <Card className="bg-white">
                <CardBody>
                    <div className="space-y-6">
                        {treatments.map((treatment) => (
                            <div
                                key={treatment.id}
                                className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {treatment.clientName}
                                        </h3>
                                        <div className="mt-2 space-y-1">
                                            <p className="text-gray-600">
                                                施術: {treatment.service}
                                            </p>
                                            <p className="text-gray-600">
                                                日時: {treatment.date} {treatment.time}
                                            </p>
                                            <p className="text-gray-600">
                                                料金: ¥{treatment.price.toLocaleString()}
                                            </p>
                                        </div>
                                        <p className="mt-3 text-gray-700">{treatment.notes}</p>
                                    </div>
                                    <Button
                                        variant="light"
                                        color="primary"
                                    >
                                        詳細を見る
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};