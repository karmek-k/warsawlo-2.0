export enum Source {
  SchoolSearchPage,
  FavouriteSchoolsPage,
}

export const sourceMap = new Map<Source, string[]>([
  [Source.SchoolSearchPage, ['Wyszukiwarka szkół', '/schools']],
  [Source.FavouriteSchoolsPage, ['Ulubione szkoły']],
]);
