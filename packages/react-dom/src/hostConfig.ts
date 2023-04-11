export type Container = Element;
export type Intance = Element;

// export const createInstance = (type: string, props: any): Intance
export const createInstance = (type: string): Intance => {
	const element = document.createElement(type);
	return element;
};

export const appendInitialChild = (
	parent: Intance | Container,
	child: Intance
) => {
	parent.appendChild(child);
};

export const createTextInstance = (content: string) => {
	return document.createTextNode(content);
};

export const appendChildToContainer = appendInitialChild;
