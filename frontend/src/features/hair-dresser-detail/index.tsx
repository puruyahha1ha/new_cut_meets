import Image from "next/image";

export const HairDresserDetail = () => {
	return (
		<>
			<div className="relative w-full h-[120px]">
				<Image
					src="/hair-dresser-header-sample.jpg"
					alt="Picture of the author"
					fill
					className="object-cover" /* 画像の表示方法を指定 */
				/>
				<div
					className="absolute bottom-2.5 left-2.5 w-[60px] h-[60px] cursor-pointer" /* 座標、サイズを指定 */
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
			<div className="flex">
				<p className="text-medium font-medium text-default-500">
					スタイリスト氏名
				</p>
				<p className="text-medium font-medium text-default-500 p-10 inline-block">
					/
				</p>
				<p className="text-medium font-medium text-default-500">所属</p>
			</div>
		</>
	);
};
