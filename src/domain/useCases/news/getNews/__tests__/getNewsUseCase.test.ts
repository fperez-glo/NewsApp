import { GetNewsUseCase } from '../index';
import { News } from '../../../../entities/News';

describe('GetNewsUseCase', () => {
  const mockNews: News[] = [
    {
      id: '1',
      title: 'Test News 1',
      excerpt: 'Test Excerpt 1',
      content: 'Test Content 1',
      imageUrl: 'https://example.com/image1.jpg',
      readTime: '5h',
      category: 'General',
      authorId: '1',
      tags: [{ id: 'tag1', title: 'Tag 1' }],
      author: { name: 'Test Author 1', id: '1', email: 'test@test.com', phone: '123456789' },
      bookmark: false,
    },
  ];

  const mockNewsRepository = {
    getNews: jest.fn().mockResolvedValue(mockNews),
    getNewsById: jest.fn(),
    getNewsByTopic: jest.fn(),
    addToBookmark: jest.fn(),
    removeBookmark: jest.fn(),
  };

  let getNewsUseCase: GetNewsUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    getNewsUseCase = new GetNewsUseCase({ NewsRepository: mockNewsRepository });
  });

  it('should fetch news successfully', async () => {
    const result = await getNewsUseCase.exec();

    expect(mockNewsRepository.getNews).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockNews);
  });

  it('should handle errors when fetching news fails', async () => {
    const error = new Error('Failed to fetch news');
    mockNewsRepository.getNews.mockRejectedValueOnce(error);

    await expect(getNewsUseCase.exec()).rejects.toThrow('Failed to fetch news');
    expect(mockNewsRepository.getNews).toHaveBeenCalledTimes(1);
  });
});
