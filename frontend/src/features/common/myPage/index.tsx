"use client";

import {
	Card,
	CardBody,
	Chip,
	Image,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	Tabs,
	User,
} from "@nextui-org/react";
import React, { type FC } from "react";

interface BookingHistory {
	id: number;
	userName: string;
	storeName: string;
	imageUrl: string;
	title: string;
	likes: number;
	price: number;
}

export const MyPage: FC = () => {
	const mockBookingHistory: BookingHistory[] = [
		{
			id: 1,
			userName: "田中 太郎",
			storeName: "美容院 BLOOM",
			imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035",
			title: "カット + カラー",
			likes: 24,
			price: 12000,
		},
		{
			id: 2,
			userName: "田中 太郎",
			storeName: "ネイルサロン PURE",
			imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371",
			title: "ジェルネイル",
			likes: 15,
			price: 8000,
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 p-8">
			<div className="max-w-2xl mx-auto">
				<h1 className="text-2xl font-bold mb-6">マイページ</h1>

				<Tabs aria-label="Profile tabs" className="mb-6">
					<Tab key="profile" title="プロフィール">
						<Card>
							<CardBody>
								<h3 className="text-lg font-medium mb-4">基本情報</h3>
								<Table hideHeader aria-label="Profile information table">
									<TableHeader>
										<TableColumn>LABEL</TableColumn>
										<TableColumn>VALUE</TableColumn>
									</TableHeader>
									<TableBody>
										<TableRow key="1">
											<TableCell className="text-default-500">氏名</TableCell>
											<TableCell>田中 太郎</TableCell>
										</TableRow>
										<TableRow key="2">
											<TableCell className="text-default-500">性別</TableCell>
											<TableCell>男性</TableCell>
										</TableRow>
										<TableRow key="3">
											<TableCell className="text-default-500">
												生年月日
											</TableCell>
											<TableCell>1990年5月15日</TableCell>
										</TableRow>
										<TableRow key="4">
											<TableCell className="text-default-500">
												携帯電話番号
											</TableCell>
											<TableCell>090-1234-5678</TableCell>
										</TableRow>
										<TableRow key="5">
											<TableCell className="text-default-500">
												メールアドレス
											</TableCell>
											<TableCell>tanaka@example.com</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</CardBody>
						</Card>
					</Tab>
					<Tab key="history" title="予約履歴">
						<div className="space-y-4">
							{mockBookingHistory.map((booking) => (
								<Card key={booking.id}>
									<CardBody>
										<div className="flex gap-4">
											<Image
												alt={booking.title}
												className="object-cover rounded-lg"
												src={booking.imageUrl}
												width={96}
												height={96}
											/>
											<div className="flex-1">
												<User name={booking.userName} className="mb-2" />
												<p className="text-lg font-medium">
													{booking.storeName}
												</p>
												<p className="text-default-500">{booking.title}</p>
												<div className="flex items-center gap-4 mt-2">
													<Chip variant="flat" color="primary" size="sm">
														♥ {booking.likes}
													</Chip>
													<p className="font-medium">
														¥{booking.price.toLocaleString()}
													</p>
												</div>
											</div>
										</div>
									</CardBody>
								</Card>
							))}
						</div>
					</Tab>
				</Tabs>
			</div>
		</div>
	);
};
