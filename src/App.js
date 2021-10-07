import { ToggleExample } from "./Examples/useToggle";
import { TimeoutExample } from "./Examples/useTimeout";
import { DebounceExample } from "./Examples/useDebounce";
import { UpdateEffectExample } from "./Examples/useUpdateEffect";
import { ArrayExample } from "./Examples/useArray";
import { PreviousExample } from "./Examples/usePrevious";

function App() {
	return (
		<div className="App">
			<ToggleExample />
			<TimeoutExample />
			<DebounceExample />
			<UpdateEffectExample />
			<ArrayExample />
			<PreviousExample />
		</div>
	);
}

export default App;
