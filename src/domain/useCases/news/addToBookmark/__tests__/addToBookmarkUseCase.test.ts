import { AddToBookmarkUseCase } from '../index';
import { News } from '../../../../entities/News';

describe('AddToBookmarkUseCase', () => {
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
    bookmark: true,
  };

  const mockNewsRepository = {
    getNews: jest.fn(),
    getNewsById: jest.fn(),
    getNewsByTopic: jest.fn(),
    addToBookmark: jest.fn().mockResolvedValue(mockNews),
    removeBookmark: jest.fn(),
  };

  let addToBookmarkUseCase: AddToBookmarkUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    addToBookmarkUseCase = new AddToBookmarkUseCase({ NewsRepository: mockNewsRepository });
  });

  it('should add news to bookmark successfully', async () => {
    const id = '1';
    const result = await addToBookmarkUseCase.exec(id);

    expect(mockNewsRepository.addToBookmark).toHaveBeenCalledWith(id);
    expect(result).toEqual(mockNews);
  });

  it('should call repository addToBookmark method with correct id', async () => {
    const id = '2';
    await addToBookmarkUseCase.exec(id);

    expect(mockNewsRepository.addToBookmark).toHaveBeenCalledWith(id);
    expect(mockNewsRepository.addToBookmark).toHaveBeenCalledTimes(1);
  });

  it('should propagate repository errors', async () => {
    const error = new Error('Failed to bookmark news');
    mockNewsRepository.addToBookmark.mockRejectedValueOnce(error);
    const id = '1';

    await expect(addToBookmarkUseCase.exec(id)).rejects.toThrow('Failed to bookmark news');
  });
});
