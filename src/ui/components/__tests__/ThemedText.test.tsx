import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import { ThemedText } from '../atoms/ThemedText';

describe('ThemedText', () => {
  it('renders with default props', () => {
    render(<ThemedText>Default text</ThemedText>);
    expect(screen.getByText('Default text')).toBeTruthy();
  });

  it('renders with different types', () => {
    const types = ['commonText', 'title', 'secondaryText'] as const;
    types.forEach((type) => {
      const { unmount } = render(<ThemedText type={type}>{`${type} text`}</ThemedText>);
      expect(screen.getByText(`${type} text`)).toBeTruthy();
      unmount();
    });
  });

  it('renders with custom colors', () => {
    render(
      <ThemedText lightColor="#ffffff" darkColor="#000000">
        Custom colored text
      </ThemedText>,
    );
    expect(screen.getByText('Custom colored text')).toBeTruthy();
  });

  it('renders with custom className and style', () => {
    render(
      <ThemedText className="text-lg font-bold" style={{ marginVertical: 8 }}>
        Styled text
      </ThemedText>,
    );
    const element = screen.getByText('Styled text');
    expect(element).toBeTruthy();
    expect(element.props.style).toContainEqual({ marginVertical: 8 });
    expect(element.props.className).toBe('text-lg font-bold');
  });
});
