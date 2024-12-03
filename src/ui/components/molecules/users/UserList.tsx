import { FlatList, RefreshControl } from 'react-native';
import React from 'react';
import { useThemeDefaultColor } from '../../../hooks/useThemeColor';
import { User } from '../../../../domain/entities/User';
import UserCard from './UserCard';

interface UserListProps {
  data: User[];
  onRefresh?: () => void;
  refreshing: boolean;
}

const UserList = ({ data, onRefresh, refreshing }: UserListProps) => {
  const colorScheme = useThemeDefaultColor();

  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => onRefresh && onRefresh()} />}
      data={data}
      key={data.length}
      style={{ backgroundColor: colorScheme.background }}
      renderItem={({ item, index }) => {
        return <UserCard name={item.name} email={item.email} phone={item.phone} id={item.id} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default UserList;
