import { ToggleExample } from "./Examples/useToggle";
import { TimeoutExample } from "./Examples/useTimeout";
import { DebounceExample } from "./Examples/useDebounce";
import { UpdateEffectExample } from "./Examples/useUpdateEffect";

function App() {
	return (
		<div className="App">
			<ToggleExample />
			<TimeoutExample />
			<DebounceExample />
			<UpdateEffectExample />
		</div>
	);
}

export default App;
