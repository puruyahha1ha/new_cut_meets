import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import type { FC } from "react";

export const PhotoCard: FC = () => {
	return (
		<div className="flex flex-wrap justify-center">
			<Card
				style={{
					width: "calc(100% - 8px)",
					maxWidth: "400px",
					minHeight: "240px",
					margin: "4px",
					cursor: "pointer",
				}}
			>
				<CardBody className="p-0">
					<div className="relative w-full h-full">
						<Image
							src="/hair-dresser-header-sample.jpg"
							alt="Picture of the author"
							fill
							className="object-cover"
							style={{ filter: "brightness(100%)" }}
						/>
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)", // 下から上にグラデーション
								filter: "brightness(50%)", // 下半分に暗くするフィルターを追加
							}}
						/>
						<p
							style={{
								position: "absolute",
								left: "8px",
								bottom: "8px",
								color: "#FFF",
							}}
							className="text-medium font-small text-default-500 txt-limit-1"
						>
							画像の説明画像の説明画像の説明画像の説明画像の説明画像の説明画像の説明画像の説明画像の説明
						</p>
					</div>
				</CardBody>
			</Card>
			<Card
				style={{
					width: "calc(100% - 8px)",
					maxWidth: "400px",
					minHeight: "240px",
					margin: "4px",
					cursor: "pointer",
				}}
			>
				<CardBody className="p-0">
					<div className="relative w-full h-full">
						<Image
							src="/hair-dresser-header-sample.jpg"
							alt="Picture of the author"
							fill
							className="object-cover"
							style={{ filter: "brightness(100%)" }}
						/>
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)", // 下から上にグラデーション
								filter: "brightness(50%)", // 下半分に暗くするフィルターを追加
							}}
						/>
						<p
							style={{
								position: "absolute",
								left: "8px",
								bottom: "8px",
								color: "#FFF",
							}}
							className="text-medium font-small text-default-500 txt-limit-1"
						>
							画像の説明画像の説明画像の説明画像の説明画像の説明画像の説明画像の説明画像の説明画像の説明
						</p>
					</div>
				</CardBody>
			</Card>
			<Card
				style={{
					width: "calc(100% - 8px)",
					maxWidth: "400px",
					minHeight: "240px",
					margin: "4px",
					cursor: "pointer",
				}}
			>
				<CardBody className="p-0">
					<div className="relative w-full h-full">
						<Image
							src="/hair-dresser-header-sample.jpg"
							alt="Picture of the author"
							fill
							className="object-cover"
							style={{ filter: "brightness(100%)" }}
						/>
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)", // 下から上にグラデーション
								filter: "brightness(50%)", // 下半分に暗くするフィルターを追加
							}}
						/>
						<p
							style={{
								position: "absolute",
								left: "8px",
								bottom: "8px",
								color: "#FFF",
							}}
							className="text-medium font-small text-default-500 txt-limit-1"
						>
							画像の説明画像の説明画像の説明画像の説明画像の説明画像の説明画像の説明画像の説明画像の説明
						</p>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};
