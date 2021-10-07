import { ToggleExample } from "./Examples/useToggle";
import { TimeoutExample } from "./Examples/useTimeout";
import { DebounceExample } from "./Examples/useDebounce";
import { UpdateEffectExample } from "./Examples/useUpdateEffect";
import { ArrayExample } from "./Examples/useArray";
import { PreviousExample } from "./Examples/usePrevious";
import { StorageExample } from "./Examples/useStorage";
import { StateWithHistoryExample } from "./Examples/useStateWithHistory";
import { AsyncExample } from "./Examples/useAsync";
import { FetchExample } from "./Examples/useFetch";
import { AxiosExample } from "./Examples/useAxios";

function App() {
	return (
		<div className="App">
			<ToggleExample />
			<TimeoutExample />
			<DebounceExample />
			<UpdateEffectExample />
			<ArrayExample />
			<PreviousExample />
			<StorageExample />
			<StateWithHistoryExample />
			<AsyncExample />
			<FetchExample />
			<AxiosExample />
		</div>
	);
}

export default App;
