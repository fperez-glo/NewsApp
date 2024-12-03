import { asClass } from 'awilix';
import { GetNewsDetailUseCase } from '../../domain/useCases/news/getNewsById';
import { GetNewsUseCase } from '../../domain/useCases/news/getNews';
import { AddToBookmarkUseCase } from '../../domain/useCases/news/addToBookmark';
import { RemoveBookmarkUseCase } from '../../domain/useCases/news/removeBookmark';
import { GetUsersUseCase } from '../../domain/useCases/user/getUsers';
import { GetConfigUseCase } from '../../domain/useCases/config/getConfigUseCase';
import { SaveConfigUseCase } from '../../domain/useCases/config/saveConfigUseCase';

export const UseCases = {
  // NEWS
  GetNewsUseCase: asClass<GetNewsUseCase>(GetNewsUseCase).scoped(),
  GetNewsDetailUseCase: asClass<GetNewsDetailUseCase>(GetNewsDetailUseCase).scoped(),
  AddToBookmarkUseCase: asClass<AddToBookmarkUseCase>(AddToBookmarkUseCase).scoped(),
  RemoveBookmarkUseCase: asClass<RemoveBookmarkUseCase>(RemoveBookmarkUseCase).scoped(),

  // USERS
  GetUsersUseCase: asClass<GetUsersUseCase>(GetUsersUseCase).scoped(),

  // CONFIG
  GetConfigUseCase: asClass<GetConfigUseCase>(GetConfigUseCase).scoped(),
  SaveConfigUseCase: asClass<SaveConfigUseCase>(SaveConfigUseCase).scoped(),
};
