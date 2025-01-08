"use client";

import type React from "react";
import type { FC } from "react";

type Props = {
	children: React.ReactNode;
	onClick?: () => void;
};

export const PrimaryButton: FC<Props> = (props: Props) => {
	const { children, onClick } = props;
	return (
		<>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button onClick={onClick}>{children}</button>
		</>
	);
};
