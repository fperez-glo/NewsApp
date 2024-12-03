import { LocalStorage } from './interface/LocalStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorageImpl implements LocalStorage {
  constructor() {}

  public async getItem(key: string): Promise<string | null> {
    return await AsyncStorage.getItem(key);
  }

  public async setItem(key: string, value: string): Promise<void> {
    const strValue = typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(key, strValue);
  }

  public async removeItem(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }

  public async addTo(key: string, value: string): Promise<void> {
    const currentValue = await this.getItem(key);
    const uniqueValues = new Set([...(currentValue ? currentValue.split(',') : []), value]);
    await this.setItem(key, [...uniqueValues].join(','));
  }

  public async removeFrom(key: string, value: string): Promise<void> {
    const currentValue = await this.getItem(key);
    const uniqueValues = new Set([...(currentValue ? currentValue.split(',') : []), value]);
    uniqueValues.delete(value);
    await this.setItem(key, [...uniqueValues].join(','));
  }
}
