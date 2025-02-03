import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import { ContentTabs } from "./components";

export const HairDresserDetail = () => {
	return (
		<>
			<div className="relative" style={{ width: "100%", height: "120px" }}>
				<Image
					src="/hair-dresser-header-sample.jpg"
					alt="Picture of the author"
					fill
					className="object-cover" /* 画像の表示方法を指定 */
				/>
				<div
					className="absolute cursor-pointer" /* 座標、サイズを指定 */
					style={{
						width: "60px",
						height: "60px",
						bottom: "10px",
						left: "10px",
					}}
					// onClick={() => setIconIsOpen(true)}
				>
					<Image
						src="/hair-dresser-user-sample.jpg"
						alt="Picture of the author"
						fill
						className="object-cover rounded-full" /* 表示方法と円形にするスタイル */
					/>
				</div>
			</div>
			<Card className="shadow-none">
				<CardBody>
					<div className="flex">
						<p className="text-medium font-medium text-default-500">
							スタイリスト氏名
						</p>
						<p
							className="text-medium font-medium text-default-500"
							style={{ paddingLeft: "10px", paddingRight: "10px" }}
						>
							/
						</p>
						<p className="text-medium font-medium text-default-500">所属</p>
					</div>
					<div className="flex">
						<p className="text-medium font-medium text-default-500">3年</p>
						<p
							className="text-medium font-medium text-default-500"
							style={{ paddingLeft: "10px", paddingRight: "10px" }}
						>
							/
						</p>
						<p className="text-medium font-medium text-default-500">京橋</p>
						<p
							className="text-medium font-medium text-default-500"
							style={{ paddingLeft: "10px", paddingRight: "10px" }}
						>
							/
						</p>
						<p className="text-medium font-medium text-default-500">★3.5</p>
					</div>
					<p className="text-medium font-medium text-default-500 txt-limit-2">
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
						自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文自己紹介文
					</p>
				</CardBody>
			</Card>
			<ContentTabs />
		</>
	);
};
