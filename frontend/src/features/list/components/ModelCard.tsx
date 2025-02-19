import { Icon } from "@iconify/react";
import { Button, Card } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

type Props = {
	model: {
		id: number;
		title: string;
		comment: string;
		name: string;
		shopname: string;
		profilePicture: string;
		price: number;
		imagePath: string;
	};
};

export const ModelCard: FC<Props> = (props: Props) => {
	const {
		id,
		title,
		comment,
		name,
		shopname,
		profilePicture,
		price,
		imagePath,
	} = props.model;
	return (
		<>
			<Link href={`/list/${id}`}>
				<Card className="overflow-hidden border-none shadow-soft rounded-2xl">
					<div className="relative aspect-[4/3]">
						<Button
							isIconOnly
							className="absolute right-3 top-3 z-20 bg-background/60 backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50 border-black"
							radius="full"
							size="sm"
							variant="flat"
						>
							<Icon icon="solar:heart-bold" width={16} />
						</Button>
						<Image
							src={imagePath}
							className="object-cover"
							alt="model"
							fill={true}
						/>
						<div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10">
							<div className="absolute bottom-0 p-4 text-white w-full">
								<h3 className="text-lg font-bold mb-1">{title}</h3>
								<p className="text-sm opacity-90">{comment}</p>
							</div>
						</div>
					</div>

					<div className="p-4">
						<div className="flex items-center">
							<div>
								<div className="mb-2 flex items-center">
									<Image
										src={profilePicture}
										className="mr-2 rounded-full max-h-[32px]"
										width={32}
										height={32}
										alt="name's profile picture"
									/>
									<div>
										<p>{name}</p>
										<p className="text-sm text-gray-500">{shopname}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-between text-sm">
							<div className="flex items-center gap-4">
								{/* <Link
									href={`/list/${id}`}
									className="rounded-full bg-primary text-white px-4 py-1 text-sm"
								>
								</Link> */}
								{/* 詳細 */}
								<button className="hover:text-primary transition-colors"></button>
							</div>
							<span className="text-primary font-medium">
								¥{price.toLocaleString()}+ tax
							</span>
						</div>
					</div>
				</Card>
			</Link>
		</>
	);
};
