import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import { Calendar, Check, ChevronLeft, Clock, Mail, Phone, User } from 'lucide-react';
import React from 'react';
import { BookingData } from '../types';

interface ConfirmationScreenProps {
    booking: BookingData;
    onBack: () => void;
    onConfirm: () => void;
}

export const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({ booking, onBack, onConfirm }) => {

    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader className="border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">予約内容の確認</h2>
            </CardHeader>

            <CardBody className="space-y-6">
                <div className="flex items-start space-x-4">
                    <img
                        src={booking.service.image}
                        alt={booking.service.name}
                        className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div>
                        <h3 className="text-lg font-medium text-gray-900">{booking.service.name}</h3>
                        <p className="text-gray-500">{booking.service.description}</p>
                        <div className="mt-2">
                            <span className="text-lg font-semibold text-gray-900">
                                ¥{booking.service.price.toLocaleString()}
                            </span>
                            <span className="ml-2 text-sm text-gray-500">
                                ({booking.service.duration}分)
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <dl className="space-y-4">
                        <div className="flex items-center">
                            <User className="h-5 w-5 text-gray-400" />
                            <dt className="ml-2 w-24 text-sm text-gray-500">お名前</dt>
                            <dd className="text-sm text-gray-900">{booking.name}</dd>
                        </div>
                        <div className="flex items-center">
                            <Mail className="h-5 w-5 text-gray-400" />
                            <dt className="ml-2 w-24 text-sm text-gray-500">メール</dt>
                            <dd className="text-sm text-gray-900">{booking.email}</dd>
                        </div>
                        <div className="flex items-center">
                            <Phone className="h-5 w-5 text-gray-400" />
                            <dt className="ml-2 w-24 text-sm text-gray-500">電話番号</dt>
                            <dd className="text-sm text-gray-900">{booking.phone}</dd>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-gray-400" />
                            <dt className="ml-2 w-24 text-sm text-gray-500">予約日</dt>
                            <dd className="text-sm text-gray-900">{booking.date}</dd>
                        </div>
                        <div className="flex items-center">
                            <Clock className="h-5 w-5 text-gray-400" />
                            <dt className="ml-2 w-24 text-sm text-gray-500">予約時間</dt>
                            <dd className="text-sm text-gray-900">{booking.time}</dd>
                        </div>
                    </dl>
                </div>

                <div className="flex justify-between pt-6">
                    <Button
                        onClick={onBack}
                        variant="light"
                        startContent={<ChevronLeft className="h-5 w-5" />}
                    >
                        戻る
                    </Button>
                    <Button
                        onClick={onConfirm}
                        color="primary"
                        startContent={<Check className="h-5 w-5" />}
                    >
                        予約を確定する
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};