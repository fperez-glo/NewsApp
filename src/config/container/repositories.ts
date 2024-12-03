import { asClass } from 'awilix';
import { NewsRepository } from '../../domain/repositories/newsRepository';
import { NewsRepositoryImpl } from '../../data/repositories/NewsRepository';
import { UserRepository } from '../../domain/repositories/userRepository';
import { UserRepositoryImpl } from '../../data/repositories/UserRepository';
import { ConfigRepository } from '../../domain/repositories/configRepository';
import { ConfigRepositoryImpl } from '../../data/repositories/ConfigRepository';

export const Repositories = {
  NewsRepository: asClass<NewsRepository>(NewsRepositoryImpl).scoped(),
  UserRepository: asClass<UserRepository>(UserRepositoryImpl).scoped(),
  ConfigRepository: asClass<ConfigRepository>(ConfigRepositoryImpl).scoped(),
};
