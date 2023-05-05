import { Container } from 'hostConfig';
import {
	createContainer,
	updateContainer
} from './../../react-reconciler/src/fiberReconciler';
import { ReactElement } from './../../shared/ReactTypes';

// ReactDom.createRoot(root).render(<App />)

export function createRoot(container: Container) {
	// 创建根HTML元素
	const root = createContainer(container);

	return {
		render(element: ReactElement) {
			return updateContainer(element, root);
		}
	};
}
