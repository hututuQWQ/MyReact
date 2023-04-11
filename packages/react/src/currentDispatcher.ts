export interface Dispatcher {
	useState: any;
}

const currentDispatcher: { current: Dispatcher | null } = {
	current: null
};

export default currentDispatcher;
