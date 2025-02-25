import { Button, Card, CardBody, Chip, Input, Textarea } from '@nextui-org/react';
import { Camera } from 'lucide-react';
import React from 'react';
import type { StylistProfile } from '../../types';

export const Profile: React.FC = () => {
    const [profile, setProfile] = React.useState<StylistProfile>({
        id: 1,
        name: '山田 美咲',
        email: 'misaki.yamada@example.com',
        phone: '090-1234-5678',
        bio: '10年以上の経験を持つスタイリストです。ナチュラルで似合わせカットが得意です。',
        specialties: ['ショートカット', 'ボブスタイル', 'レイヤーカット'],
        experience: 10,
        avatar: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=200',
    });

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">プロフィール設定</h2>

            <Card className="bg-white">
                <CardBody className="space-y-8">
                    {/* プロフィール画像 */}
                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            <img
                                src={profile.avatar}
                                alt={profile.name}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <Button
                                isIconOnly
                                className="absolute bottom-0 right-0"
                                size="sm"
                                aria-label="Upload photo"
                            >
                                <Camera className="h-4 w-4" />
                            </Button>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">{profile.name}</h3>
                            <p className="text-gray-600">スタイリスト</p>
                        </div>
                    </div>

                    {/* 基本情報 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="名前"
                            value={profile.name}
                            variant="bordered"
                        />
                        <Input
                            label="メールアドレス"
                            value={profile.email}
                            type="email"
                            variant="bordered"
                        />
                        <Input
                            label="電話番号"
                            value={profile.phone}
                            variant="bordered"
                        />
                        <Input
                            label="経験年数"
                            value={profile.experience.toString()}
                            type="number"
                            endContent="年"
                            variant="bordered"
                        />
                    </div>

                    {/* 自己紹介 */}
                    <div>
                        <Textarea
                            label="自己紹介"
                            value={profile.bio}
                            variant="bordered"
                            minRows={3}
                        />
                    </div>

                    {/* 得意分野 */}
                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">得意分野</p>
                        <div className="flex flex-wrap gap-2">
                            {profile.specialties.map((specialty, index) => (
                                <Chip key={index} color="primary" variant="flat">
                                    {specialty}
                                </Chip>
                            ))}
                        </div>
                    </div>

                    {/* 保存ボタン */}
                    <div className="flex justify-end">
                        <Button color="primary" size="lg">
                            変更を保存
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};