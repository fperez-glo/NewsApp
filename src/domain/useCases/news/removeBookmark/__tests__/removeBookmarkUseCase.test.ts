import { RemoveBookmarkUseCase } from '../index';
import { News } from '../../../../entities/News';

describe('RemoveBookmarkUseCase', () => {
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
    getNewsById: jest.fn(),
    getNewsByTopic: jest.fn(),
    addToBookmark: jest.fn(),
    removeBookmark: jest.fn().mockResolvedValue(mockNews),
  };

  let removeBookmarkUseCase: RemoveBookmarkUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    removeBookmarkUseCase = new RemoveBookmarkUseCase({ NewsRepository: mockNewsRepository });
  });

  it('should remove news from bookmark successfully', async () => {
    const id = '1';
    const result = await removeBookmarkUseCase.exec(id);

    expect(mockNewsRepository.removeBookmark).toHaveBeenCalledWith(id);
    expect(result).toEqual(mockNews);
  });
});
