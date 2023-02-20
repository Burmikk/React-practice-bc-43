import './App.css';
import { BlogCard } from './components/BlogCard/BlogCard';
import { Statistics } from './components/Statistics/Statistics';
import { Forbes } from './components/ForbesList/Forbes';
import article from './data/article.json';
import statistics from './data/statistics.json';
import forbes from './data/forbes.json';
import transactions from './data/transactions.json';
import { Transactions } from './components/Transactions/Transactions';
import Basket from './components/Basket/Basket';
import basket from './data/data.basket.json';
import { ContactsPage } from './components/Contacts/ContactsPage/ContactsPage';
import { AccordionItem} from './components/AccordionItem/AccordionItem'

function App() {
  return (
    <div className="App">
      {/* <ContactsPage /> */}
      {/* <Basket data={basket} /> */}
      {/* <BlogCard {...article} />
      <Statistics data={statistics} title="Main Statistics" />
      <Statistics data={statistics} />
      <Forbes list={forbes} title="hello" />
      <Forbes list={forbes} />
      <Transactions items={transactions} /> */}
      <AccordionItem />
    </div>
  );
}

export default App;
