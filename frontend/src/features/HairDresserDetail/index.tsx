import Image from "next/image";
import { ContentTabs, HairDresserUserInfo } from "./components";

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
			<HairDresserUserInfo />
			<ContentTabs />
		</>
	);
};
