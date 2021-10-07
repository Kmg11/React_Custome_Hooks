import { ToggleExample } from "./Examples/useToggle";
import { TimeoutExample } from "./Examples/useTimeout";
import { DebounceExample } from "./Examples/useDebounce";
import { UpdateEffectExample } from "./Examples/useUpdateEffect";
import { ArrayExample } from "./Examples/useArray";

function App() {
	return (
		<div className="App">
			<ToggleExample />
			<TimeoutExample />
			<DebounceExample />
			<UpdateEffectExample />
			<ArrayExample />
		</div>
	);
}

export default App;
