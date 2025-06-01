import { GetUsersUseCase } from '../index';
import { UserRepository } from '../../../../repositories/userRepository';
import { User } from '../../../../entities/User';

describe('GetUsersUseCase', () => {
  let mockUserRepository: jest.Mocked<UserRepository>;
  let getUsersUseCase: GetUsersUseCase;

  beforeEach(() => {
    mockUserRepository = {
      getUsers: jest.fn(),
    } as jest.Mocked<UserRepository>;

    getUsersUseCase = new GetUsersUseCase({ UserRepository: mockUserRepository });
  });

  it('should successfully get users from repository', async () => {
    const mockUsers: User[] = [
      { id: '1', name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321' },
    ];
    mockUserRepository.getUsers.mockResolvedValue(mockUsers);

    const result = await getUsersUseCase.exec();

    expect(mockUserRepository.getUsers).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockUsers);
  });

  it('should throw error when repository fails to get users', async () => {
    const error = new Error('Failed to get users');
    mockUserRepository.getUsers.mockRejectedValue(error);

    await expect(getUsersUseCase.exec()).rejects.toThrow('Failed to get users');
    expect(mockUserRepository.getUsers).toHaveBeenCalledTimes(1);
  });

  it('should return empty array when repository returns no users', async () => {
    mockUserRepository.getUsers.mockResolvedValue([]);

    const result = await getUsersUseCase.exec();

    expect(mockUserRepository.getUsers).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  });
});
