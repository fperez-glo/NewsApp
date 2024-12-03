import { useContainerInjection } from '../../hooks/useContainerInjection';
import { UserViewModel } from '../../viewModels/UserViewModel';
import { observer } from 'mobx-react-lite';
import UserList from '../../components/molecules/users/UserList';

const UsersScreen = () => {
  const viewModel = useContainerInjection<UserViewModel>('UserViewModel');

  return (
    <UserList data={viewModel.users} onRefresh={() => viewModel.fetchUsersData()} refreshing={viewModel.isLoading} />
  );
};

export default observer(UsersScreen);
