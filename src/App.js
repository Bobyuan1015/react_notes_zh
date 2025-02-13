
const count = 100
function getName(){
  return 'name'
}

const list=[
  {id:1001, name:'A'},
  {id:1002, name:'B'},
  {id:1003, name:'C'}]

function App() {
  return (
    <div className="App">
      {/*渲染列表  */}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>

      test
      {/* 引号字符串 */}
      {"str test"}
      {/* js变量 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 调用js对象 */}
      <div style={{color:'blue'}}>test js in div</div>
    </div>
  );
}

export default App;
