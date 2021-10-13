import { useSelector } from 'react-redux';
import { getCurrentTab } from '../selectors/tabSelectors';

export default function useCurrentTab() {
  const currentTab = useSelector(getCurrentTab);
  return {
    currentTab
  };
}
