import { Card, CardBody } from "@heroui/react";
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
				<CardBody className="p-0" style={{ width: "100%", height: "100%" }}>
					<div style={{ position: "relative", width: "100%", height: "100%" }}>
						<Image
							src="/hair-dresser-header-sample.jpg"
							alt="Picture of the author"
							sizes="100%"
							fill
						/>
						<div
							className="relative inset-0"
							style={{
								background:
									"linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)", // 下から上にグラデーション
								filter: "brightness(50%)", // 下半分に暗くするフィルターを追加
								width: "100%",
								height: "100%",
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
				<CardBody className="p-0" style={{ width: "100%", height: "100%" }}>
					<div style={{ position: "relative", width: "100%", height: "100%" }}>
						<Image
							src="/hair-dresser-header-sample.jpg"
							alt="Picture of the author"
							sizes="100%"
							fill
						/>
						<div
							className="relative inset-0"
							style={{
								background:
									"linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)", // 下から上にグラデーション
								filter: "brightness(50%)", // 下半分に暗くするフィルターを追加
								width: "100%",
								height: "100%",
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
				<CardBody className="p-0" style={{ width: "100%", height: "100%" }}>
					<div style={{ position: "relative", width: "100%", height: "100%" }}>
						<Image
							src="/hair-dresser-header-sample.jpg"
							alt="Picture of the author"
							sizes="100%"
							fill
						/>
						<div
							className="relative inset-0"
							style={{
								background:
									"linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)", // 下から上にグラデーション
								filter: "brightness(50%)", // 下半分に暗くするフィルターを追加
								width: "100%",
								height: "100%",
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
				<CardBody className="p-0" style={{ width: "100%", height: "100%" }}>
					<div style={{ position: "relative", width: "100%", height: "100%" }}>
						<Image
							src="/hair-dresser-header-sample.jpg"
							alt="Picture of the author"
							sizes="100%"
							fill
						/>
						<div
							className="relative inset-0"
							style={{
								background:
									"linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)", // 下から上にグラデーション
								filter: "brightness(50%)", // 下半分に暗くするフィルターを追加
								width: "100%",
								height: "100%",
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
