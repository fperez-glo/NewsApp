import { asClass } from 'awilix';
import { NewsViewModel } from '../../ui/viewModels/NewsViewModel';
import { UserViewModel } from '../../ui/viewModels/UserViewModel';
import { ConfigViewModel } from '../../ui/viewModels/ConfigViewModel';

export const ViewModels = {
  NewsViewModel: asClass<NewsViewModel>(NewsViewModel).singleton(),
  UserViewModel: asClass<UserViewModel>(UserViewModel).singleton(),
  ConfigViewModel: asClass<ConfigViewModel>(ConfigViewModel).singleton(),
};
