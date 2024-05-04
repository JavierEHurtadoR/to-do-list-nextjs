import AddTask from '@/app/components/AddTask'
import Table from './components/Table';
import Form from './components/Form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 max-w-4xl mx-auto">
      <header className='p-10'>
        <h1 className='text-2xl font-bold'>To Do List</h1>
      </header>
      <div className='p-10'>
        <Form/>
      </div>
    </main>
  );
}
