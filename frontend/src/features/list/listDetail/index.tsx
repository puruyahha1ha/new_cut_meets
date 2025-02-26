"use client";

import { CarouselImages } from "@/components/CarouselImages/CarouselImages";
import type { CarouselImage } from "@/components/CarouselImages/type";
import { Button, Card, CardBody, Chip, Divider } from "@nextui-org/react"
import { useRouter } from "next/navigation";
import type { FC } from "react";

type Props = {
    id: string;
}

export const ListDetail: FC<Props> = (props: Props) => {
    const { id } = props;
    const router = useRouter();
    const images: CarouselImage[] = [
        {
            imagePath: "/cutmodel.jpg",
        },
        {
            imagePath: "/cutmodel.jpg",
        },
        {
            imagePath: "/cutmodel.jpg",
        },
        {
            imagePath: "/cutmodel.jpg",
        },
        {
            imagePath: "/cutmodel.jpg",
        }
    ];

    return (
        <>
            <div className="min-h-screen py-6 sm:py-8 md:py-12 bg-gray-50">
                <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <CarouselImages images={images}></CarouselImages>

                    <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">カット</h1>

                    <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                        <div>
                            <p className="text-base sm:text-lg text-gray-700 mb-6">
                                熟練のスタイリストによる丁寧なカウンセリングと高度なカット技術で、
                                お客様の理想のスタイルを実現します。髪質や骨格を見極め、
                                ライフスタイルに合わせた最適なスタイルをご提案いたします。
                            </p>

                            <div className="flex flex-col gap-3 sm:gap-4 mb-6">
                                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2">
                                    <li>施術時間: 60分</li>
                                    <li>カット + シャンプー + ブロー込み</li>
                                    <li>平均評価: 4.9/5.0 (234件)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                                    含まれるサービス
                                </h3>

                                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2">
                                    <li>カウンセリング</li>
                                    <li>シャンプー＆スキャルプマッサージ</li>
                                    <li>カット</li>
                                    <li>ブロー仕上げ</li>
                                    <li>スタイリング</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <Card className="bg-default-50">
                                <CardBody className="gap-4">
                                    <h2 className="text-xl sm:text-2xl font-bold">料金</h2>

                                    <div className="flex justify-between items-baseline">
                                        <span className="text-2xl sm:text-3xl font-bold">¥4,800</span>
                                        <Chip size="sm" variant="flat">（税込）</Chip>
                                    </div>

                                    {/* <Link href={`/list`}> */}
                                    <Button
                                        color="primary"
                                        size="lg"
                                        className="w-full"
                                        onPress={() => {
                                            // 画面遷移
                                            router.push(`/list/${id}/booking`);
                                        }}
                                    >
                                        予約する
                                    </Button>
                                    {/* </Link> */}

                                    <p className="text-xs sm:text-sm text-default-500">
                                        ※ 土日祝は+¥500となります
                                    </p>
                                </CardBody>
                            </Card>

                            <Divider className="my-6"></Divider>

                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">注意事項</h3>

                                <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-2">
                                    <li>予約の変更・キャンセルは前日までにご連絡ください</li>
                                    <li>遅刷された場合、施術時間を短縮させていただく場合がございます</li>
                                    <li>施術時間は髪の長さや状態により前後する場合がございます</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};
