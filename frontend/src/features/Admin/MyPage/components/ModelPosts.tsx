import {
    Button,
    Card,
    CardBody,
} from '@nextui-org/react';
import { Edit2, Plus, Trash2 } from 'lucide-react';
import React from 'react';
import type { ModelPost } from '../types';

export const ModelPosts: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [posts, setPosts] = React.useState<ModelPost[]>([
        {
            id: 1,
            title: 'ショートカットモデル募集',
            description: 'ショートヘアのカットモデルを募集しています。',
            requirements: '肩より長い髪の方、カット無料',
            date: '2024-03-20',
            time: '14:00',
            price: 0,
            status: 'open',
            createdAt: '2024-03-15',
        },
        // 他の投稿データ
    ]);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">カットモデル募集</h2>
                <Button
                    color="primary"
                    startContent={<Plus className="h-5 w-5" />}
                >
                    新規作成
                </Button>
            </div>

            <Card className="bg-white">
                <CardBody>
                    <div className="space-y-4">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="border-b border-gray-200 last:border-0 pb-4 last:pb-0"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mt-1">{post.description}</p>
                                        <div className="mt-2 space-y-1 text-sm text-gray-500">
                                            <p>応募条件: {post.requirements}</p>
                                            <p>日時: {post.date} {post.time}</p>
                                            <p>料金: {post.price === 0 ? '無料' : `¥${post.price.toLocaleString()}`}</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Button
                                            isIconOnly
                                            variant="light"
                                            aria-label="Edit"
                                        >
                                            <Edit2 className="h-5 w-5 text-gray-600" />
                                        </Button>
                                        <Button
                                            isIconOnly
                                            variant="light"
                                            color="danger"
                                            aria-label="Delete"
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};