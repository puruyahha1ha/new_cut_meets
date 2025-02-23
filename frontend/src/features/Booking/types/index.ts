export interface ServiceType {
	id: number;
	name: string;
	price: number;
	duration: number;
	image: string;
	description: string;
}

export interface BookingFormData {
	name: string;
	email: string;
	phone: string;
	date: string;
	time: string;
}

export interface BookingData extends BookingFormData {
	service: ServiceType;
}
