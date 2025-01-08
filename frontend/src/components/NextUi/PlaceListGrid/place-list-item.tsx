"use client";

import { PrimaryButton } from "@/components/PrimaryButton";
import { useUserList } from "@/features/UserList/hooks/useUserList";
import { Icon } from "@iconify/react";
import { Button, Image, Skeleton } from "@nextui-org/react";
import { cn } from "@nextui-org/react";
import React from "react";

export type PlaceListItemColor = {
	name: string;
	hex: string;
};

export type PlaceItem = {
	id: string;
	name: string;
	href: string;
	price: number;
	isNew?: boolean;
	rating?: number;
	ratingCount?: number;
	description?: string;
	imageSrc: string;
};

export type PlaceListItemProps = Omit<
	React.HTMLAttributes<HTMLDivElement>,
	"id"
> & {
	isPopular?: boolean;
	isLoading?: boolean;
	removeWrapper?: boolean;
} & PlaceItem;

const PlaceListItem = React.forwardRef<HTMLDivElement, PlaceListItemProps>(
	(
		{
			name,
			price,
			rating,
			isLoading,
			description,
			imageSrc,
			removeWrapper,
			className,
			...props
		},
		ref,
	) => {
		const [isLiked, setIsLiked] = React.useState(false);

		const { user, fetchUserList } = useUserList();

		return (
			<div
				ref={ref}
				className={cn(
					"relative flex w-full flex-none flex-col gap-3",
					{
						"rounded-none bg-background shadow-none": removeWrapper,
					},
					className,
				)}
				{...props}
			>
				<div className="mt-1 flex flex-col gap-2 px-1">
					{isLoading ? (
						<div className="my-1 flex flex-col gap-3">
							<Skeleton className="w-3/5 rounded-lg">
								<div className="h-3 w-3/5 rounded-lg bg-default-200" />
							</Skeleton>
							<Skeleton className="mt-3 w-4/5 rounded-lg">
								<div className="h-3 w-4/5 rounded-lg bg-default-200" />
							</Skeleton>
							<Skeleton className="mt-4 w-2/5 rounded-lg">
								<div className="h-3 w-2/5 rounded-lg bg-default-300" />
							</Skeleton>
						</div>
					) : (
						<>
							<div className="flex items-start justify-between gap-1">
								<h3 className="text-small font-medium text-default-700">
									{name}
								</h3>
								{rating !== undefined ? (
									<div className="flex items-center gap-1">
										<Icon
											className="text-yellow-500"
											icon="solar:star-bold"
											width={16}
										/>
										<span className="text-small text-default-500">
											{rating}
										</span>
									</div>
								) : null}
							</div>
							{description ? (
								<p className="text-small text-default-500">{description}</p>
							) : null}
							<div className="flex gap-1 alignitems-center justify-between">
								<p className="text-small font-medium witch-fitcontent text-default-700">
									${price}
								</p>
								<Button
									isIconOnly
									radius="full"
									size="sm"
									variant="flat"
									onPress={() => setIsLiked(!isLiked)}
								>
									<Icon
										className={cn("text-default-900/50", {
											"text-danger-400": isLiked,
										})}
										icon="solar:heart-bold"
										width={16}
									/>
								</Button>
								<PrimaryButton
									onClick={() => {
										alert("aaa");
									}}
								>
									ボタン
								</PrimaryButton>
							</div>
						</>
					)}
				</div>

				<Image
					isBlurred
					isZoomed
					alt={name}
					className="aspect-square w-full hover:scale-110"
					isLoading={isLoading}
					src={imageSrc}
				/>
			</div>
		);
	},
);

PlaceListItem.displayName = "PlaceListItem";

export default PlaceListItem;
