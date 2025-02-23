'use client';

import useToast from '@/components/Toast/useToast';
import { useToastContext } from '@/context/ToastContect';
import { Button } from '@nextui-org/react';
import { Scissors } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BookingForm, ConfirmationScreen } from './components';
import type { BookingData, BookingFormData, ServiceType } from './types';


const service: ServiceType = {
    id: 1,
    name: 'カット',
    price: 4800,
    duration: 60,
    image: '/cutmodel.jpg',
    description: 'お客様の髪質・骨格に合わせたスタイリングをご提案いたします。丁寧なカウンセリングと高度なカット技術で、あなたの理想のスタイルを実現します。',
};

export const Booking = () => {
    const [step, setStep] = useState<'form' | 'confirmation'>('form');
    const [formData, setFormData] = useState<BookingFormData>({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
    });

    const { showToast } = useToastContext();
    const router = useRouter();

    const handleBookingSubmit = (data: BookingFormData) => {
        setFormData(data);
        setStep('confirmation');
    };

    const handleBack = () => {
        setStep('form');
    };

    const handleBookingConfirm = () => {
        showToast('予約が完了しました。ご予約内容をメールにてお送りいたしますので、ご確認ください。', 'success');
        // Reset form after successful booking
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
        });
        router.push("/my-page/test?type=history")
    };

    const bookingData: BookingData = {
        service,
        ...formData,
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {step === 'form' ? (
                    <BookingForm
                        service={service}
                        initialData={formData}
                        onSubmit={handleBookingSubmit}
                    />
                ) : (
                    <ConfirmationScreen booking={bookingData} onBack={handleBack} onConfirm={handleBookingConfirm} />
                )}
            </main>
        </div>
    );
}