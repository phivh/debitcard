import {NavigationService, Routes} from 'navigation';
import {useCallback} from 'react';

export const useMenu = () => {
  const navToLimit = useCallback(
    () => NavigationService.navigate(Routes.SpendingLimit),
    [],
  );
  return {
    navToLimit,
  };
};
