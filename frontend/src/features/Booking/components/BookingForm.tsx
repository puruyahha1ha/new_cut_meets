import { Button, Card, CardBody, CardHeader, Input, Select, SelectItem } from '@nextui-org/react';
import { format, isValid, parse } from 'date-fns';
import { ja } from 'date-fns/locale/ja';
import { Calendar, Clock } from 'lucide-react';
import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import type { BookingFormData, ServiceType } from '../types';

registerLocale('ja', ja);

interface BookingFormProps {
    service: ServiceType;
    initialData: BookingFormData;
    onSubmit: (data: BookingFormData) => void;
}

export const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
];

export const BookingForm: React.FC<BookingFormProps> = ({ service, initialData, onSubmit }) => {
    const [formData, setFormData] = useState<BookingFormData>(initialData);
    const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
        if (initialData.date) {
            const parsedDate = parse(initialData.date, 'yyyy-MM-dd', new Date());
            return isValid(parsedDate) ? parsedDate : null;
        }
        return null;
    });
    const [errors, setErrors] = useState<Partial<BookingFormData>>({});
    const [touched, setTouched] = useState<Partial<Record<keyof BookingFormData, boolean>>>({});

    const [isOpen, setIsOpen] = React.useState(false);


    // Generate time slots from 10:00 to 18:00
    const timeSlots = Array.from({ length: 17 }, (_, i) => {
        const hour = Math.floor(i / 2) + 10;
        const minute = i % 2 === 0 ? '00' : '30';
        return `${hour.toString().padStart(2, '0')}:${minute}`;
    });

    const validateField = (name: keyof BookingFormData, value: string) => {
        const newErrors: Partial<BookingFormData> = { ...errors };

        switch (name) {
            case 'name':
                if (!value.trim()) {
                    newErrors.name = 'お名前を入力してください';
                } else {
                    delete newErrors.name;
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value.trim()) {
                    newErrors.email = 'メールアドレスを入力してください';
                } else if (!emailRegex.test(value)) {
                    newErrors.email = '有効なメールアドレスを入力してください';
                } else {
                    delete newErrors.email;
                }
                break;
            case 'phone':
                const phoneRegex = /^[0-9-]{10,}$/;
                if (!value.trim()) {
                    newErrors.phone = '電話番号を入力してください';
                } else if (!phoneRegex.test(value)) {
                    newErrors.phone = '有効な電話番号を入力してください';
                } else {
                    delete newErrors.phone;
                }
                break;
            case 'date':
                if (!value) {
                    newErrors.date = '日付を選択してください';
                } else {
                    delete newErrors.date;
                }
                break;
            case 'time':
                if (!value) {
                    newErrors.time = '時間を選択してください';
                } else {
                    delete newErrors.time;
                }
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (name: keyof BookingFormData, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        setTouched(prev => ({ ...prev, [name]: true }));
        validateField(name, value);
    };

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        const formattedDate = date ? format(date, 'yyyy-MM-dd') : '';
        handleInputChange('date', formattedDate);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate all fields
        let isValid = true;
        const newTouched: Partial<Record<keyof BookingFormData, boolean>> = {};

        (Object.keys(formData) as Array<keyof BookingFormData>).forEach(field => {
            newTouched[field] = true;
            if (!validateField(field, formData[field])) {
                isValid = false;
            }
        });

        setTouched(newTouched);

        if (isValid) {
            onSubmit(formData);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    };

    const getInputState = (fieldName: keyof BookingFormData) => {
        if (!touched[fieldName]) return undefined;
        return errors[fieldName] ? 'invalid' : 'valid';
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-white">
                <CardHeader className="p-0">
                    <picture className='w-full'>
                        <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-64 object-cover"
                        />
                    </picture>
                </CardHeader>
                <CardBody className="p-6">
                    <h3 className="text-2xl font-medium text-gray-900">{service.name}</h3>
                    <p className="mt-2 text-gray-600">{service.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-2xl font-semibold text-gray-900">
                            ¥{service.price.toLocaleString()}
                        </span>
                        <span className="text-lg text-gray-600">所要時間: {service.duration}分</span>
                    </div>
                </CardBody>
            </Card>

            <Card className="bg-white">
                <CardHeader>
                    <h2 className="text-xl font-semibold text-gray-800">予約情報の入力</h2>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                type="text"
                                label="お名前"
                                placeholder="山田 花子"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                variant="bordered"
                                validationState={getInputState('name')}
                                errorMessage={touched.name && errors.name}
                                required
                            />
                            <Input
                                type="email"
                                label="メールアドレス"
                                placeholder="example@email.com"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                variant="bordered"
                                validationState={getInputState('email')}
                                errorMessage={touched.email && errors.email}
                                required
                            />
                            <Input
                                type="tel"
                                label="電話番号"
                                placeholder="090-1234-5678"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                variant="bordered"
                                validationState={getInputState('phone')}
                                errorMessage={touched.phone && errors.phone}
                                required
                            />
                            <div className="space-y-1">
                                <div className="relative">
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        dateFormat="yyyy/MM/dd"
                                        minDate={new Date()}
                                        locale="ja"
                                        placeholderText="日付を選択"
                                        className="w-full rounded-lg border-medium px-3 py-2"
                                        required
                                        customInput={
                                            <Input
                                                label="予約日"
                                                startContent={<Calendar className="h-5 w-5 text-default-400" />}
                                                variant="bordered"
                                                validationState={getInputState('date')}
                                                errorMessage={touched.date && errors.date}
                                            />
                                        }
                                    />
                                </div>
                            </div>
                            {/* <Select
                                label="予約時間"
                                placeholder="予約時間を選択"
                                value={formData.time}
                                defaultSelectedKeys={[formData.time]}
                                onChange={(e) => handleInputChange('time', e.target.value)}
                                variant="bordered"
                                validationState={getInputState('time')}
                                errorMessage={touched.time && errors.time}
                                required
                                startContent={<Clock className="h-5 w-5 text-default-400" />}
                            >
                                {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                        {time}
                                    </SelectItem>
                                ))}
                            </Select> */}
                            <Select
                                label="予約時間"
                                placeholder="予約時間を選択"
                                className="max-w-xs"
                                value={formData.time}
                                defaultSelectedKeys={[formData.time]}
                                isOpen={isOpen}
                                onOpenChange={(open) => open !== isOpen && setIsOpen(open)}
                                onChange={(e) => handleInputChange('time', e.target.value)}
                                startContent={<Clock className="h-5 w-5 text-default-400" />}
                                errorMessage={touched.time && errors.time}
                                variant="bordered"
                                validationState={getInputState('time')}
                                required
                            >
                                {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                        {time}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        <Button
                            type="submit"
                            color="primary"
                            className="w-full"
                            size="lg"
                        >
                            予約内容を確認する
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};
