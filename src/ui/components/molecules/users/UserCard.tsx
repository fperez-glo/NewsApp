import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { ThemedView } from '../../atoms/ThemedView';
import { ThemedText } from '../../atoms/ThemedText';
import { Mail, Phone } from 'lucide-react-native';
import { useThemeDefaultColor } from '../../../hooks/useThemeColor';

interface UserCardProps {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const UserCard = ({ id, name, email, phone }: UserCardProps) => {
  const colorSchema = useThemeDefaultColor();
  return (
    <TouchableOpacity activeOpacity={0.65} className="border-b last:border-b-1 border-gray-300">
      <ThemedView className="p-4 flex gap-4 flex-1 flex-row ">
        <View className="flex-1">
          <View className="flex-1">
            <ThemedText type="title" className="text-xl font-semibold text-foreground">
              {name}
            </ThemedText>

            <View className="flex-row gap-2 items-center text-sm text-secondary mt-1">
              <Mail size={14} color={colorSchema.icon} />
              <ThemedText className="text-secondary">{email}</ThemedText>
            </View>
            <View className="flex-row gap-2 items-center text-sm text-secondary mt-1">
              <Phone size={14} className="mr-2" color={colorSchema.icon} />
              <ThemedText className="text-secondary">+{phone}</ThemedText>
            </View>
          </View>
        </View>
      </ThemedView>
    </TouchableOpacity>
  );
};

export default UserCard;
