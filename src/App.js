import './App.css'

const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan']
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav']

const App = () => {
  const uniqueList1 = list1.filter(user => !list2.includes(user))
  console.log(uniqueList1)

  const uniqueList2 = list2.filter(user => !list1.includes(user))
  console.log(uniqueList2)

  const commonUsers = list1.filter(user => list2.includes(user))
  console.log(commonUsers)

  return <div>Hello Eteva Tech Consulting </div>
}

export default App
