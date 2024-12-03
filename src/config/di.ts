import { createContainer, asClass } from 'awilix';
import { AxiosHttpManager } from '../data/datasource/Http';
import { HttpManager } from '../data/datasource/interface/HttpManager';
import { LocalStorage } from '../data/datasource/interface/LocalStorage';
import { LocalStorageImpl } from '../data/datasource/LocalStorage';
import { Repositories } from './container/repositories';
import { UseCases } from './container/useCases';
import { ViewModels } from './container/viewModels';
import { Translation } from '../ui/locale/translation';

const container = createContainer();

container.register({
  // SERVICES
  HttpManager: asClass<HttpManager>(AxiosHttpManager).scoped(),
  LocalStorage: asClass<LocalStorage>(LocalStorageImpl).scoped(),

  ...Repositories,
  ...UseCases,
  ...ViewModels,

  // STORES
  Translation: asClass<Translation>(Translation).singleton(),
});

type HttpManagerType = 'HttpManager';
type RepositoriesType = 'NewsRepository';
type UseCasesType = 'GetNewsUseCase' | 'GetNewsDetailUseCase';
type Stores = 'Translation';
type ViewModelsType = 'NewsViewModel' | 'UserViewModel' | 'ConfigViewModel';

export type ContainerType = HttpManagerType | RepositoriesType | UseCasesType | ViewModelsType | Stores;

export { container };
