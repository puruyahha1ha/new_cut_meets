"use client";

import { getUserList } from "@/service/getUserList";
import { useCallback, useState } from "react";

export const useUserList = () => {
	const [user, setUser] = useState([]);

	const fetchUserList = useCallback(async () => {
		const response = await getUserList();
		setUser(response);
	}, []);

	const handleClick = useCallback(() => {
		fetchUserList();
	}, [fetchUserList]);

	return { user, fetchUserList, handleClick };
};
