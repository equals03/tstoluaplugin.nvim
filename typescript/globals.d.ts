declare type Indexable = Record<string, unknown>;
declare type TypedIndexable<T> = Record<string, T>;

declare type ReadonlyIndexable = Readonly<Indexable>;
declare type ReadonlyTypedIndexable<T> = Readonly<TypedIndexable<T>>;
