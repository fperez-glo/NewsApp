import React from 'react';
import { render, fireEvent, within } from '@testing-library/react-native';
import NewsCard from '../molecules/news/NewsCard';

// Mock expo-router since we can't use it in tests
jest.mock('expo-router', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

describe('NewsCard', () => {
  const mockProps = {
    index: 1,
    id: '123',
    title: 'Test News Title',
    excerpt: 'Test news excerpt',
    image: 'https://example.com/image.jpg',
    readTime: '5 min',
    topic: 'technology',
    bookMark: false,
    onPressBookmark: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with all props', () => {
    const { getByText } = render(<NewsCard {...mockProps} />);

    expect(getByText('Test News Title')).toBeTruthy();
    expect(getByText('Test news excerpt')).toBeTruthy();
    expect(getByText('technology')).toBeTruthy();
    expect(getByText('5 min')).toBeTruthy();
  });

  it('calls onPressBookmark when bookmark icon is pressed', () => {
    const { getByTestId } = render(<NewsCard {...mockProps} />);

    const bookmarkButton = getByTestId('bookmark-button');
    fireEvent.press(bookmarkButton);

    expect(mockProps.onPressBookmark).toHaveBeenCalledWith('123');
  });

  it('displays bookmark icon in correct state', () => {
    const { rerender, getAllByTestId } = render(<NewsCard {...mockProps} />);

    // Test unbookmarked state
    expect(getAllByTestId('bookmark-icon')[0]).toHaveProp('strokeWidth', 1.5);

    // Test bookmarked state
    rerender(<NewsCard {...mockProps} bookMark={true} />);
    expect(getAllByTestId('bookmark-icon')[0]).toHaveProp('strokeWidth', 0.5);
  });
});
