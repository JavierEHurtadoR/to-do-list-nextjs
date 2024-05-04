import AddTask from '@/app/components/AddTask'
import Table from '@/app/components/Table';

export default function log(){
    return <main className="flex min-h-screen flex-col items-center p-24 max-w-4xl mx-auto">
      <header className='p-10'>
        <h1 className='text-2xl font-bold'>To Do List</h1>
      </header>
      <div className='p-10'>
        <Table />
        <AddTask />
      </div>
    </main>
}