"use client";

import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import type { FC } from "react";
import { PhotoCard } from "./PhotoCard";
import { ProfileCard } from "./ProfileCard";

export const ContentTabs: FC = () => {
	return (
		<>
			<div className="flex w-full flex-col" style={{ paddingTop: "10px" }}>
				<Tabs aria-label="Options">
					<Tab key="menu" title="Menu">
						<Card className="shadow-none">
							<CardBody>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</CardBody>
						</Card>
					</Tab>
					<Tab key="profile" title="Profile">
						<Card className="shadow-none">
							<CardBody>
								<ProfileCard />
							</CardBody>
						</Card>
					</Tab>
					<Tab key="photo" title="Photo">
						<Card className="shadow-none">
							<CardBody>
								<PhotoCard />
							</CardBody>
						</Card>
					</Tab>
					<Tab key="review" title="Review">
						<Card className="shadow-none">
							<CardBody>レビュー！</CardBody>
						</Card>
					</Tab>
				</Tabs>
			</div>
		</>
	);
};
