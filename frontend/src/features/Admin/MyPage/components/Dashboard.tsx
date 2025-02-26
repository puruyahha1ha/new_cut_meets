import { Card, CardBody } from '@nextui-org/react';
import { Calendar, Clock, TrendingUp, Users } from 'lucide-react';
import React from 'react';

export const Dashboard: React.FC = () => {
    const stats = [
        {
            title: '今月の予約数',
            value: '24',
            icon: <Calendar className="h-6 w-6 text-blue-500" />,
            trend: '+12%',
        },
        {
            title: '新規のお客様',
            value: '8',
            icon: <Users className="h-6 w-6 text-green-500" />,
            trend: '+5%',
        },
        {
            title: '売上',
            value: '¥156,000',
            icon: <TrendingUp className="h-6 w-6 text-purple-500" />,
            trend: '+8%',
        },
        {
            title: '平均施術時間',
            value: '45分',
            icon: <Clock className="h-6 w-6 text-orange-500" />,
            trend: '-2%',
        },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">ダッシュボード</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <Card key={index} className="bg-white">
                        <CardBody className="flex items-center p-6">
                            <div className="mr-4">{stat.icon}</div>
                            <div>
                                <p className="text-sm text-gray-600">{stat.title}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                <p className={`text-sm ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                    {stat.trend}
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white">
                    <CardBody>
                        <h3 className="text-lg font-semibold mb-4">今日の予約</h3>
                        {/* 予約リストのコンポーネントをここに追加 */}
                    </CardBody>
                </Card>

                <Card className="bg-white">
                    <CardBody>
                        <h3 className="text-lg font-semibold mb-4">最近のカットモデル応募</h3>
                        {/* カットモデル応募リストのコンポーネントをここに追加 */}
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};