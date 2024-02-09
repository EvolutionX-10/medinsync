import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLoginDetails = create(
	persist(
		(set) => ({
			username: "",
			aadhaar: "",
			setLoginDetails: (username, aadhaar) => set({ username, aadhaar }),
		}),
		{
			name: "login-details",
		}
	)
);
