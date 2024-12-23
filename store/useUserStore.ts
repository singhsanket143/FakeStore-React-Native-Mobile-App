import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';

type UserState = {
    isOnboardingFinished: boolean;
    toggleOnboarding: () => void;
}

export const useUserStore = create(
    persist<UserState>((set) => ({
        isOnboardingFinished: false,
        toggleOnboarding: () => {
            set((state) => {
                return {
                    ...state,
                    isOnboardingFinished: !state.isOnboardingFinished
                }
            })
        }
    }), {
        name: "ecom-store",
        storage: createJSONStorage(() => AsyncStorage)
    })
)