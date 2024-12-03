export interface LocalStorage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
  addTo(key: string, value: string): Promise<void>;
  removeFrom(key: string, value: string): Promise<void>;
}
