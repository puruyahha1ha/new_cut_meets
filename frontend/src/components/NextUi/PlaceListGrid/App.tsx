"use client";

import { cn } from "@nextui-org/react";
import React, { type FC } from "react";

import PlaceListItem from "./place-list-item";
import places from "./places";

type Props = {
	className?: string;
};

export const PlaceListGrid: FC<Props> = (props: Props) => {
	const { className } = props;
	return (
		<div
			className={cn(
				"my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
				className,
			)}
		>
			{places.map((place) => (
				<PlaceListItem key={place.id} {...place} />
			))}
		</div>
	);
};
