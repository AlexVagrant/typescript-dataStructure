type ActionCreatorMap<ActionMap> = {
  [key in keyof ActionMap]: (params?, arg2?, arg3?, arg4?) => ActionMap[key]
}
type ValueOf<ActionMap> = ActionMap[keyof ActionMap];

function returnType<ActionMap>(action:ActionCreatorMap<ActionMap>) {
  type Action = ValueOf<ActionMap>;
  return {} as any as Action;
}

const mockAction = returnType(action);

type ActionType = typeof mockAction;

type Reverse<T> = (arg: any) => T;

function returnResultType<T>(arg:Reverse<T>): T{
  return {} as any as T;
}

type Reducer<S> = (state:s, action:any) => T;

type ReducersMap<FullState> = {
  [ key in keyof FullState]: Reducer<FullState[key]>;
}

function returnStateType<Fullstate>(reducerMap: ReducersMap<Fullstate>): FullState {
    return {} as any as FullState;
}
