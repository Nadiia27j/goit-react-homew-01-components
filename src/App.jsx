


import  Profile  from './components/Profile/Profile'
import  Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import user from './components/user/user'
import data from './components/data/data'
import friends from './components/friends/friends'
import transactions from './components/transactions/transactions'



export default function App() {
    return <div className="App">
        <Profile 
            avatar={user.avatar}
            username={user.username}
            tag={user.tag}
            location={user.location}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
        />
        <Statistics  title="Upload stats" stats={data} />
        <Statistics   stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>

};