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

export const useHospitalDetails = create(
	persist(
		(set) => ({
			name: "",
			gstNo: "",
			setHospitalDetails: (name, gstNo) => set({ name, gstNo }),
		}),
		{
			name: "hospital-details",
		}
	)
);
