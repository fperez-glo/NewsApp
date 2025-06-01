import { GetConfigUseCase } from '../index';
import { ConfigRepository } from '../../../../repositories/configRepository';
import { Config } from '../../../../entities/Config';

describe('GetConfigUseCase', () => {
  let mockConfigRepository: jest.Mocked<ConfigRepository>;
  let getConfigUseCase: GetConfigUseCase;

  beforeEach(() => {
    mockConfigRepository = {
      getConfig: jest.fn(),
      saveConfig: jest.fn(),
    } as jest.Mocked<ConfigRepository>;

    getConfigUseCase = new GetConfigUseCase({ ConfigRepository: mockConfigRepository });
  });

  it('should successfully get config from repository', async () => {
    const mockConfig: Config = {
      theme: 'dark',
      language: 'en',
    };
    mockConfigRepository.getConfig.mockResolvedValue(mockConfig);

    const result = await getConfigUseCase.exec();

    expect(mockConfigRepository.getConfig).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockConfig);
  });

  it('should throw error when repository fails to get config', async () => {
    const error = new Error('Failed to get config');
    mockConfigRepository.getConfig.mockRejectedValue(error);

    await expect(getConfigUseCase.exec()).rejects.toThrow('Failed to get config');
    expect(mockConfigRepository.getConfig).toHaveBeenCalledTimes(1);
  });

  it('should return default config when repository returns empty config', async () => {
    const emptyConfig: Config = {
      theme: 'light',
      language: 'en',
    };
    mockConfigRepository.getConfig.mockResolvedValue(emptyConfig);

    const result = await getConfigUseCase.exec();

    expect(mockConfigRepository.getConfig).toHaveBeenCalledTimes(1);
    expect(result).toBeDefined();
    expect(result).toEqual(emptyConfig);
  });
});
