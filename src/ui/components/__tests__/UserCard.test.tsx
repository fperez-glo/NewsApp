import { render, screen } from '@testing-library/react-native';
import UserCard from '../molecules/users/UserCard';
import React from 'react';

describe('UserCard', () => {
  const mockUserData = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
  };

  it('renders user information correctly', () => {
    render(<UserCard {...mockUserData} />);

    // Verify name is displayed
    expect(screen.getByText(mockUserData.name)).toBeTruthy();

    // Verify email is displayed
    expect(screen.getByText(mockUserData.email)).toBeTruthy();

    // Verify phone is displayed with + prefix
    expect(screen.getByText(`+${mockUserData.phone}`)).toBeTruthy();
  });
});
