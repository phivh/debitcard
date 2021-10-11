import {NavigationService} from 'navigation';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from 'store/Card';

export const useCard = () => {
  const dispatch = useDispatch();

  const loading = useSelector(Selectors.getLoading);
  const error = useSelector(Selectors.getError);
  const card = useSelector(Selectors.getCard);
  const limitEnabled = useSelector(Selectors.getEnabledLimit);
  const accountBalance = useSelector(Selectors.getAccountBalance);

  /**
    Set card spending limit
    @param form - limit value
    @object card information
  */
  const onSetLimit = useCallback(
    (form: {limit: number}, back: boolean = true) => {
      dispatch(
        Actions.cardLimitRequest(form, () => {
          back && NavigationService.goBack();
        }),
      );
    },
    [dispatch],
  );
  /**
    Fetching card information
  */
  const onGetCard = useCallback(() => {
    dispatch(Actions.cardRequest());
  }, [dispatch]);

  return {
    onSetLimit,
    onGetCard,
    loading,
    error,
    card,
    limitEnabled,
    accountBalance,
  };
};
