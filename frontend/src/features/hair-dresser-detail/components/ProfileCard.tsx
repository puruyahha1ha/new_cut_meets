"use client";

import { Button, Card, CardBody } from "@heroui/react";
import { type FC, useState } from "react";

export const ProfileCard: FC = () => {
	const [profileIsOpen, setProfileIsOpen] = useState(false);
	const [appealIsOpen, setAppealIsOpen] = useState(false);
	return (
		<div className="flex flex-col gap-4">
			<Card>
				<CardBody>
					<h3 className="text-lerge font-medium text-default-700 py-1">
						自己紹介詳細
					</h3>
					{!profileIsOpen ? (
						<p className="text-medium font-medium text-default-500 txt-limit-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					) : (
						<p className="text-medium font-medium text-default-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					)}
					<div className="flex justify-end">
						<Button
							color="primary"
							variant="light"
							onPress={() => setProfileIsOpen(!profileIsOpen)}
						>
							{!profileIsOpen ? "もっと見る" : "折りたたむ"}
						</Button>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<h3 className="text-lerge font-medium text-default-700 py-1">
						アピール / 特技
					</h3>
					{!appealIsOpen ? (
						<p className="text-medium font-medium text-default-500 txt-limit-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					) : (
						<p className="text-medium font-medium text-default-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					)}
					<div className="flex justify-end">
						<Button
							color="primary"
							variant="light"
							onPress={() => setAppealIsOpen(!appealIsOpen)}
						>
							{!appealIsOpen ? "もっと見る" : "折りたたむ"}
						</Button>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};
