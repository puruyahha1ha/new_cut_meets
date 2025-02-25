import { Badge, Card, CardBody } from '@nextui-org/react';
import { Bell } from 'lucide-react';
import React from 'react';
import type { Notification } from '../../types';

export const Notifications: React.FC = () => {
    const [notifications, setNotifications] = React.useState<Notification[]>([
        {
            id: 1,
            title: 'カットモデルへの応募がありました',
            message: '「ショートカットモデル募集」に新しい応募がありました。',
            isRead: false,
            createdAt: '2024-03-15T10:30:00',
        },
        {
            id: 2,
            title: '予約が確定しました',
            message: '山田様の3月20日14:00の予約が確定しました。',
            isRead: true,
            createdAt: '2024-03-14T15:45:00',
        },
        // 他の通知データ
    ]);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">通知</h2>
                <Badge content="2" color="danger">
                    <Bell className="h-6 w-6 text-gray-600" />
                </Badge>
            </div>

            <Card className="bg-white">
                <CardBody>
                    <div className="space-y-4">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`p-4 rounded-lg ${notification.isRead ? 'bg-white' : 'bg-blue-50'
                                    } border border-gray-200`}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className={`text-lg ${notification.isRead ? 'text-gray-900' : 'text-blue-900 font-medium'
                                            }`}>
                                            {notification.title}
                                        </h3>
                                        <p className="text-gray-600 mt-1">{notification.message}</p>
                                        <p className="text-sm text-gray-500 mt-2">
                                            {new Date(notification.createdAt).toLocaleString('ja-JP')}
                                        </p>
                                    </div>
                                    {!notification.isRead && (
                                        <div className="h-2 w-2 bg-blue-500 rounded-full" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};