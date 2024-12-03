import { View, TextInput } from 'react-native';
import React, { forwardRef, Ref } from 'react';
import { Search } from 'lucide-react-native';
import { useThemeDefaultColor } from '../../../hooks/useThemeColor';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export interface SearchBarRef {
  focus: () => void;
}

const SearchBar = forwardRef(({ onSearch }: SearchBarProps, ref: Ref<SearchBarRef>) => {
  const colorScheme = useThemeDefaultColor();
  const inputRef = React.useRef<TextInput>(null);

  React.useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));

  return (
    <View
      style={{ backgroundColor: colorScheme.background }}
      className="h-16 flex flex-row p-4 justify-start  w-full border-b-[1px] border-gray-300"
    >
      <Search className="w-6 h-6" color={colorScheme.title} strokeWidth={1.5} />
      <TextInput
        ref={inputRef}
        onChangeText={onSearch}
        style={{ color: colorScheme.commonText }}
        className="px-2 placeholder:text-gray-500 w-full"
        placeholder="Buscar..."
      />
    </View>
  );
});

export default SearchBar;
