import { GetNewsDetailUseCase } from '../index';
import { News } from '../../../../entities/News';

describe('GetNewsDetailUseCase', () => {
  const mockNews: News = {
    id: '1',
    title: 'Test News 1',
    excerpt: 'Test Excerpt 1',
    content: 'Test Content 1',
    imageUrl: 'https://example.com/image1.jpg',
    readTime: '2h',
    category: 'General',
    authorId: '1',
    author: { name: 'Test Author 1', id: '1', email: 'test@test.com', phone: '123456789' },
    tags: [{ id: 'tag1', title: 'Tag 1' }],
    bookmark: false,
  };

  const mockNewsRepository = {
    getNews: jest.fn(),
    getNewsById: jest.fn().mockResolvedValue(mockNews),
    getNewsByTopic: jest.fn(),
    addToBookmark: jest.fn(),
    removeBookmark: jest.fn(),
  };

  let getNewsDetailUseCase: GetNewsDetailUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    getNewsDetailUseCase = new GetNewsDetailUseCase({ NewsRepository: mockNewsRepository });
  });

  it('should get news detail by id successfully', async () => {
    const id = '1';
    const result = await getNewsDetailUseCase.exec(id);

    expect(mockNewsRepository.getNewsById).toHaveBeenCalledWith(id);
    expect(result).toEqual(mockNews);
  });

  it('should call repository getNewsById method with correct id', async () => {
    const id = '2';
    await getNewsDetailUseCase.exec(id);

    expect(mockNewsRepository.getNewsById).toHaveBeenCalledWith(id);
    expect(mockNewsRepository.getNewsById).toHaveBeenCalledTimes(1);
  });

  it('should propagate repository errors', async () => {
    const error = new Error('Failed to fetch news');
    mockNewsRepository.getNewsById.mockRejectedValueOnce(error);
    const id = '1';

    await expect(getNewsDetailUseCase.exec(id)).rejects.toThrow('Failed to fetch news');
  });
});
