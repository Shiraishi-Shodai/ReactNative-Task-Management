window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":1,"numPassedTestSuites":4,"numPassedTests":5,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":5,"numTotalTests":6,"startTime":1731383287627,"success":false,"testResults":[{"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1731383304447,"runtime":8828,"slow":true,"start":1731383295619},"testFilePath":"G:\\dev\\task-management-app\\components\\__tests__\\ThemedText-test.tsx","failureMessage":null,"testResults":[{"ancestorTitles":[],"duration":1042,"failureMessages":[],"fullName":"renders correctly","status":"passed","title":"renders correctly"}]},{"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1731383304579,"runtime":104,"slow":false,"start":1731383304475},"testFilePath":"G:\\dev\\task-management-app\\__test__\\AccountManagement\\3.test.tsx","failureMessage":null,"testResults":[{"ancestorTitles":["#Test3:"],"duration":0,"failureMessages":[],"fullName":"#Test3: ログアウトボタンを押さずにアプリを閉じた後にアプリを起動する","status":"passed","title":"ログアウトボタンを押さずにアプリを閉じた後にアプリを起動する"}]},{"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1731383312206,"runtime":16587,"slow":true,"start":1731383295619},"testFilePath":"G:\\dev\\task-management-app\\__test__\\AccountManagement\\1.test.tsx","failureMessage":null,"testResults":[{"ancestorTitles":["#Test1:"],"duration":4570,"failureMessages":[],"fullName":"#Test1: ログイン画面が表示されるべき","status":"passed","title":"ログイン画面が表示されるべき"}]},{"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1731383312234,"runtime":16614,"slow":true,"start":1731383295620},"testFilePath":"G:\\dev\\task-management-app\\__test__\\AccountManagement\\2.test.tsx","failureMessage":null,"testResults":[{"ancestorTitles":["#Test2:"],"duration":8230,"failureMessages":[],"fullName":"#Test2: ログアウトボタンを押すと、Context APIで管理しているuserがnullになる","status":"passed","title":"ログアウトボタンを押すと、Context APIで管理しているuserがnullになる"}]},{"numFailingTests":1,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1731383316082,"runtime":20463,"slow":true,"start":1731383295619},"testFilePath":"G:\\dev\\task-management-app\\__test__\\Home\\8.test.tsx","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mTest8: › タスク一覧を表示する\u001b[39m\u001b[22m\n\n    TypeError: Cannot read properties of null (reading 'getTodaysTasks')\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 18 |\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 19 |\u001b[39m   \u001b[36mconst\u001b[39m fetchTasks \u001b[33m=\u001b[39m useCallback(\u001b[36masync\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 20 |\u001b[39m     \u001b[36mconst\u001b[39m data \u001b[33m=\u001b[39m \u001b[36mawait\u001b[39m user\u001b[33m.\u001b[39mgetTodaysTasks(pickDate)\u001b[33m;\u001b[39m \u001b[90m// 非同期関数の結果を待つ\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m    |\u001b[39m                             \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 21 |\u001b[39m     setTaskList(data \u001b[33m||\u001b[39m [])\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 22 |\u001b[39m   }\u001b[33m,\u001b[39m [pickDate])\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 23 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat getTodaysTasks (\u001b[22m\u001b[2mcomponents/TaskList.tsx\u001b[2m:20:29)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat asyncGeneratorStep (\u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:3:17)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat _next (\u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:17:9)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:22:7\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:14:12\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat fetchTasks (\u001b[22m\u001b[2mcomponents/TaskList.tsx\u001b[2m:26:7)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat callback (\u001b[22m\u001b[2mjest.setup.ts\u001b[2m:10:5)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat TaskList (\u001b[22m\u001b[2mcomponents/TaskList.tsx\u001b[2m:24:17)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderWithHooks (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:6351:18)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat mountIndeterminateComponent (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:9855:13)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat beginWork (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:11312:16)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performUnitOfWork (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:15808:12)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat workLoopSync (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:15745:5)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderRootSync (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:15717:7)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performSyncWorkOnRoot (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:15422:20)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat flushSyncCallbacks (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:2597:22)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat flushActQueue (\u001b[22m\u001b[2mnode_modules/react/cjs/react.development.js\u001b[2m:2667:24)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat act (\u001b[22m\u001b[2mnode_modules/react/cjs/react.development.js\u001b[2m:2521:11)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat actImplementation (\u001b[22m\u001b[2mnode_modules/@testing-library/react-native/src/act.ts\u001b[2m:30:25)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderWithAct (\u001b[22m\u001b[2mnode_modules/@testing-library/react-native/src/render-act.ts\u001b[2m:12:11)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderInternal (\u001b[22m\u001b[2mnode_modules/@testing-library/react-native/src/render.tsx\u001b[2m:59:33)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderInternal (\u001b[22m\u001b[2mnode_modules/@testing-library/react-native/src/render.tsx\u001b[2m:29:10)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36m__test__/Home/8.test.tsx\u001b[39m\u001b[0m\u001b[2m:123:33)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat asyncGeneratorStep (\u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:3:17)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat _next (\u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:17:9)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:22:7\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:14:12)\u001b[22m\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mTest8: › タスク一覧を表示する\u001b[39m\u001b[22m\n\n    Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.\n\n    Check the render method of `RenderItem`.\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 19 |\u001b[39m   \u001b[36mconst\u001b[39m fetchTasks \u001b[33m=\u001b[39m useCallback(\u001b[36masync\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[22m\n\u001b[2m     \u001b[90m 20 |\u001b[39m     \u001b[36mconst\u001b[39m data \u001b[33m=\u001b[39m \u001b[36mawait\u001b[39m user\u001b[33m.\u001b[39mgetTodaysTasks(pickDate)\u001b[33m;\u001b[39m \u001b[90m// 非同期関数の結果を待つ\u001b[39m\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 21 |\u001b[39m     setTaskList(data \u001b[33m||\u001b[39m [])\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m    |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 22 |\u001b[39m   }\u001b[33m,\u001b[39m [pickDate])\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 23 |\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 24 |\u001b[39m   useFocusEffect(\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat createFiberFromTypeAndProps (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:17518:17)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat createFiberFromElement (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:17544:15)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat createChild (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:5202:28)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat reconcileChildrenArray (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:5492:25)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat reconcileChildFibers (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:5884:16)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat reconcileChildren (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:9096:28)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat updateHostComponent (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:9713:3)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat beginWork (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:11343:14)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performUnitOfWork (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:15808:12)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat workLoopSync (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:15745:5)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat renderRootSync (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:15717:7)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat performSyncWorkOnRoot (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:15422:20)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat flushSyncCallbacks (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:2597:22)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat flushSyncCallbacksOnlyInLegacyMode (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:2576:5)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat scheduleUpdateOnFiber (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:14910:7)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat dispatchSetState (\u001b[22m\u001b[2mnode_modules/react-test-renderer/cjs/react-test-renderer.development.js\u001b[2m:7510:7)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat setTaskList (\u001b[22m\u001b[2mcomponents/TaskList.tsx\u001b[2m:21:5)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat asyncGeneratorStep (\u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:3:17)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat _next (\u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:17:9)\u001b[22m\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mTest8: › タスク一覧を表示する\u001b[39m\u001b[22m\n\n    Unable to find node on an unmounted component.\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 123 |\u001b[39m     \u001b[36mconst\u001b[39m { getByText } \u001b[33m=\u001b[39m render(\u001b[33m<\u001b[39m\u001b[33mTestProvider\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 124 |\u001b[39m\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 125 |\u001b[39m     \u001b[36mawait\u001b[39m waitFor(() \u001b[33m=>\u001b[39m {\u001b[22m\n\u001b[2m     \u001b[90m     |\u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 126 |\u001b[39m       console\u001b[33m.\u001b[39mlog(getByText(\u001b[32m\"task1\"\u001b[39m))\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 127 |\u001b[39m     })\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 128 |\u001b[39m   })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36m__test__/Home/8.test.tsx\u001b[39m\u001b[0m\u001b[2m:125:18)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat asyncGeneratorStep (\u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:3:17)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat _next (\u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:17:9)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:22:7\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2mnode_modules/@babel/runtime/helpers/asyncToGenerator.js\u001b[2m:14:12)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["Test8:"],"duration":10,"failureMessages":[],"fullName":"Test8: タスク一覧を取得する","status":"passed","title":"タスク一覧を取得する"},{"ancestorTitles":["Test8:"],"duration":2194,"failureMessages":["TypeError: Cannot read properties of null (reading 'getTodaysTasks')\n    at getTodaysTasks (G:\\dev\\task-management-app\\components\\TaskList.tsx:20:29)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:3:17)\n    at _next (G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:17:9)\n    at G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:22:7\n    at new Promise (<anonymous>)\n    at G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:14:12\n    at fetchTasks (G:\\dev\\task-management-app\\components\\TaskList.tsx:26:7)\n    at callback (G:\\dev\\task-management-app\\jest.setup.ts:10:5)\n    at G:\\dev\\task-management-app\\node_modules\\jest-mock\\build\\index.js:397:39\n    at G:\\dev\\task-management-app\\node_modules\\jest-mock\\build\\index.js:404:13\n    at mockConstructor (G:\\dev\\task-management-app\\node_modules\\jest-mock\\build\\index.js:148:19)\n    at TaskList (G:\\dev\\task-management-app\\components\\TaskList.tsx:24:17)\n    at renderWithHooks (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:6351:18)\n    at mountIndeterminateComponent (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:9855:13)\n    at beginWork (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:11312:16)\n    at performUnitOfWork (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:15808:12)\n    at workLoopSync (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:15745:5)\n    at renderRootSync (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:15717:7)\n    at performSyncWorkOnRoot (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:15422:20)\n    at flushSyncCallbacks (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:2597:22)\n    at flushActQueue (G:\\dev\\task-management-app\\node_modules\\react\\cjs\\react.development.js:2667:24)\n    at act (G:\\dev\\task-management-app\\node_modules\\react\\cjs\\react.development.js:2521:11)\n    at actImplementation (G:\\dev\\task-management-app\\node_modules\\@testing-library\\react-native\\src\\act.ts:30:25)\n    at renderWithAct (G:\\dev\\task-management-app\\node_modules\\@testing-library\\react-native\\src\\render-act.ts:12:11)\n    at renderInternal (G:\\dev\\task-management-app\\node_modules\\@testing-library\\react-native\\src\\render.tsx:59:33)\n    at renderInternal (G:\\dev\\task-management-app\\node_modules\\@testing-library\\react-native\\src\\render.tsx:29:10)\n    at Object.<anonymous> (G:\\dev\\task-management-app\\__test__\\Home\\8.test.tsx:123:33)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:3:17)\n    at _next (G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:17:9)\n    at G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:22:7\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:14:12)\n    at Promise.then.completed (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\utils.js:298:28)\n    at new Promise (<anonymous>)\n    at callAsyncCircusFn (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\utils.js:231:10)\n    at _callCircusTest (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\run.js:316:40)\n    at _runTest (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\run.js:252:3)\n    at _runTestsForDescribeBlock (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\run.js:126:9)\n    at _runTestsForDescribeBlock (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\run.js:121:9)\n    at run (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\run.js:71:3)\n    at runAndTransformResultsToJestFormat (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapterInit.js:122:21)\n    at jestAdapter (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapter.js:79:19)\n    at runTestInternal (G:\\dev\\task-management-app\\node_modules\\jest-runner\\build\\runTest.js:367:16)\n    at runTest (G:\\dev\\task-management-app\\node_modules\\jest-runner\\build\\runTest.js:444:34)\n    at Object.worker (G:\\dev\\task-management-app\\node_modules\\jest-runner\\build\\testWorker.js:106:12)","Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.\n\nCheck the render method of `RenderItem`.\n    at createFiberFromTypeAndProps (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:17518:17)\n    at createFiberFromElement (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:17544:15)\n    at createChild (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:5202:28)\n    at reconcileChildrenArray (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:5492:25)\n    at reconcileChildFibers (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:5884:16)\n    at reconcileChildren (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:9096:28)\n    at updateHostComponent (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:9713:3)\n    at beginWork (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:11343:14)\n    at performUnitOfWork (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:15808:12)\n    at workLoopSync (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:15745:5)\n    at renderRootSync (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:15717:7)\n    at performSyncWorkOnRoot (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:15422:20)\n    at flushSyncCallbacks (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:2597:22)\n    at flushSyncCallbacksOnlyInLegacyMode (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:2576:5)\n    at scheduleUpdateOnFiber (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:14910:7)\n    at dispatchSetState (G:\\dev\\task-management-app\\node_modules\\react-test-renderer\\cjs\\react-test-renderer.development.js:7510:7)\n    at setTaskList (G:\\dev\\task-management-app\\components\\TaskList.tsx:21:5)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:3:17)\n    at _next (G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:17:9)","Error: Unable to find node on an unmounted component.\n    at Object.<anonymous> (G:\\dev\\task-management-app\\__test__\\Home\\8.test.tsx:125:18)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:3:17)\n    at _next (G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:17:9)\n    at G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:22:7\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (G:\\dev\\task-management-app\\node_modules\\@babel\\runtime\\helpers\\asyncToGenerator.js:14:12)\n    at Promise.then.completed (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\utils.js:298:28)\n    at new Promise (<anonymous>)\n    at callAsyncCircusFn (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\utils.js:231:10)\n    at _callCircusTest (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\run.js:316:40)\n    at _runTest (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\run.js:252:3)\n    at _runTestsForDescribeBlock (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\run.js:126:9)\n    at _runTestsForDescribeBlock (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\run.js:121:9)\n    at run (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\run.js:71:3)\n    at runAndTransformResultsToJestFormat (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapterInit.js:122:21)\n    at jestAdapter (G:\\dev\\task-management-app\\node_modules\\jest-circus\\build\\legacy-code-todo-rewrite\\jestAdapter.js:79:19)\n    at runTestInternal (G:\\dev\\task-management-app\\node_modules\\jest-runner\\build\\runTest.js:367:16)\n    at runTest (G:\\dev\\task-management-app\\node_modules\\jest-runner\\build\\runTest.js:444:34)\n    at Object.worker (G:\\dev\\task-management-app\\node_modules\\jest-runner\\build\\testWorker.js:106:12)"],"fullName":"Test8: タスク一覧を表示する","status":"failed","title":"タスク一覧を表示する"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":true,"collectCoverageFrom":["**/*.{ts,tsx,js,jsx}","!**/coverage/**","!**/node_modules/**","!**/babel.config.js","!**/expo-env.d.ts","!**/.expo/**"],"coverageDirectory":"G:\\dev\\task-management-app\\coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":4,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":true,"projects":[],"reporters":[["default",{}],["G:\\dev\\task-management-app\\node_modules\\jest-html-reporters\\index.js",{}]],"rootDir":"G:\\dev\\task-management-app","runTestsByPath":false,"seed":1600282188,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"G:\\dev\\task-management-app\\node_modules\\@jest\\test-sequencer\\build\\index.js","updateSnapshot":"new","useStderr":false,"watch":false,"watchAll":true,"watchman":true,"workerThreads":false,"coverageLinkPath":"coverage\\lcov-report\\index.html"},"endTime":1731383316174,"_reporterOptions":{"publicPath":"G:\\dev\\task-management-app","filename":"jest_html_reporters.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"stripSkippedTest":false},"logInfoMapping":{},"attachInfos":{}})