# low-hooks（弟弟hooks）

## TODO
### 你需要我需要，大家都需要的
#### side effects
- useAsync
- useAsyncFn
- useDebounce
- useDebounceFn
- useThrottle
- useThrottleFn
- useCooike
#### state
- useBoolean
- useToggle
- useList
- useMap
- useSet
#### UI
- useAudio
- useVideo
- useFullscreen
#### sensors
- useEventListener
- useKeyPress
- useLongPress
- useScroll
- useSize
- useMouse
- useMousePosition
- useHover

### useAnimate
目前打算依赖个animate.css之类的
```
import { useRefAnimate, useClassAnimate } from '../useAnimate'
const [ref, start, end] = useRefAnimate(type)
const [class, start, end] = useClassAnimate(type)
```

### useLocalStorage
```
imoort useLocalStorage from '../useLocalStorage'
const [ val, setVal ] = useLocalStorage('_Cross-tag')
```