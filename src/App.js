import { ToggleExample } from "./Examples/useToggle";
import { TimeoutExample } from "./Examples/useTimeout";
import { DebounceExample } from "./Examples/useDebounce";

function App() {
	return (
		<div className="App">
			<ToggleExample />
			<TimeoutExample />
			<DebounceExample />
		</div>
	);
}

export default App;
