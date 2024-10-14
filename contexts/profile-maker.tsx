import React from 'react';
import { profileMakerStore } from '../store/profile-maker-store';

const ProfileMakerContext = React.createContext(undefined);

export const ProfileMakerProvider = ({ children }) => {
  const store = profileMakerStore;
  
  return (
    <ProfileMakerContext.Provider value={store}>
      {children}
    </ProfileMakerContext.Provider>
  );
};

// Create a custom hook to access the store
export const useProfileMaker = () => {
  const context = React.useContext(ProfileMakerContext);
  if (!context) {
    throw new Error('useProfileMaker must be used within a ProfileMakerProvider');
  }
  return context;
};
