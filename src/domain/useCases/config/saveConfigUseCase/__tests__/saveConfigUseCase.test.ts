import { SaveConfigUseCase } from '../index';
import { ConfigRepository } from '../../../../repositories/configRepository';
import { Config } from '../../../../entities/Config';

describe('SaveConfigUseCase', () => {
  let mockConfigRepository: jest.Mocked<ConfigRepository>;
  let saveConfigUseCase: SaveConfigUseCase;

  beforeEach(() => {
    mockConfigRepository = {
      getConfig: jest.fn(),
      saveConfig: jest.fn(),
    } as jest.Mocked<ConfigRepository>;

    saveConfigUseCase = new SaveConfigUseCase({ ConfigRepository: mockConfigRepository });
  });

  it('should successfully save config to repository', async () => {
    const mockConfig: Config = {
      theme: 'dark',
      language: 'en',
    };
    mockConfigRepository.saveConfig.mockResolvedValue();

    await saveConfigUseCase.exec(mockConfig);

    expect(mockConfigRepository.saveConfig).toHaveBeenCalledTimes(1);
    expect(mockConfigRepository.saveConfig).toHaveBeenCalledWith(mockConfig);
  });

  it('should throw error when repository fails to save', async () => {
    const mockConfig: Config = {
      theme: 'light',
      language: 'es',
    };
    const error = new Error('Failed to save config');
    mockConfigRepository.saveConfig.mockRejectedValue(error);

    await expect(saveConfigUseCase.exec(mockConfig)).rejects.toThrow('Failed to save config');
    expect(mockConfigRepository.saveConfig).toHaveBeenCalledTimes(1);
    expect(mockConfigRepository.saveConfig).toHaveBeenCalledWith(mockConfig);
  });
});
