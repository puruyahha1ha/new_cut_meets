export interface ModelPost {
	id: number;
	title: string;
	description: string;
	requirements: string;
	date: string;
	time: string;
	price: number;
	status: "open" | "closed";
	createdAt: string;
}

export interface Notification {
	id: number;
	title: string;
	message: string;
	isRead: boolean;
	createdAt: string;
}

export interface Treatment {
	id: number;
	clientName: string;
	service: string;
	date: string;
	time: string;
	notes: string;
	price: number;
}

export interface StylistProfile {
	id: number;
	name: string;
	email: string;
	phone: string;
	bio: string;
	specialties: string[];
	experience: number;
	avatar: string;
}
